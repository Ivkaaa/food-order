import { useRef, useState } from "react";

import "./Checkout.css";

const isEmpty = (value) => value.trim() === '';
const isNineDigits = (value) => value.trim().length > 8;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    flor: true,
    phone: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const florInputRef = useRef();
  const phoneInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const nameInput = nameInputRef.current.value;
    const addressInput = addressInputRef.current.value;
    const florInput = florInputRef.current.value;
    const phoneInput = phoneInputRef.current.value;

    const nameIsValid = !isEmpty(nameInput);
    const addressIsValid = !isEmpty(addressInput);
    const florIsValid = !isEmpty(florInput);
    const phoneIsValid = isNineDigits(phoneInput);

    setFormInputValidity({
      name: nameIsValid,
      address: addressIsValid,
      flor: florIsValid,
      phone: phoneIsValid,
    })

    const formIsValid = nameIsValid && addressIsValid && florIsValid && phoneIsValid;

    if (!formIsValid) {
      console.log("Error");
      return;
    };

    props.onConfirm({
      name: nameInput,
      address: addressInput,
      flor: florInput,
      phone: phoneInput,
    });

    console.log("Submitted!");
    console.log(nameInput, addressInput, florInput, phoneInput);
  };

  const nameInvalidClass = !formInputValidity.name
    ? "control invalid"
    : "control";
  const addressInvalidClass = !formInputValidity.address ? "control invalid" : "control";
  const florInvalidClass = !formInputValidity.flor ? "control invalid" : "control";
  const phoneInvalidClass = !formInputValidity.phone ? "control invalid" : "control";

  return (
    <form id="checkout-form" onSubmit={submitHandler}>
      <div className="flex-class">
        <div className={nameInvalidClass}>
          <label htmlFor="name">Ime i prezime:</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputValidity.name && (
            <p className="invalid">
              Molimo Vas da unesete ispravno ime i prezime.
            </p>
          )}
        </div>
        <div className={addressInvalidClass}>
          <label htmlFor="address">Ulica u broj:</label>
          <input type="text" id="address" ref={addressInputRef} />
          {!formInputValidity.address && (
            <p className="invalid">Molimo Vas da unesete ispravanu adresu.</p>
          )}
        </div>
      </div>
      <div className="flex-class">
        <div className={florInvalidClass}>
          <label htmlFor="flor">Sprat/broj stana:</label>
          <input type="text" id="flor" ref={florInputRef} />
          {!formInputValidity.flor && (
            <p className="invalid">
              Molimo Vas da unesete ispravan broj stana i sprat.
            </p>
          )}
        </div>
        <div className={phoneInvalidClass}>
          <label htmlFor="phone">Broj telefona:</label>
          <input type="number" id="phone" ref={phoneInputRef} />
          {!formInputValidity.phone && (
            <p className="invalid">
              Molimo Vas da unesete ispravan broj telefona.
            </p>
          )}
        </div>
      </div>
      <div className="actions">
        <button type="button" className="close" onClick={props.onCloseCart}>
          Otkaži
        </button>
        <button
          type="submit"
          className="submit"
        >
          Naruči
        </button>
      </div>
    </form>
  );
};

export default Checkout;
