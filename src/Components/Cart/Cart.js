import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import './Cart.css';

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false); // check pizza order
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount;
  const emptyCart = totalAmount < 1;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1})
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };
  
  //salje podatke iz forme na server
  const submitOrderHandler = async(userData) => {
    await fetch(
      "https://menu-30773-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );

    setDidSubmit(true);
    cartCtx.removeAllFromCart();
  };
  
  const cartItems = (
    <ul className="cart-list">
      {cartCtx.items.map( item => (
        <CartItem 
          key={item.id} 
          name={item.name} 
          price={item.price} 
          amount={item.amount} 
          onItemRemove={cartItemRemoveHandler.bind(NaN, item.id)} 
          onItemAdd={cartItemAddHandler.bind(null, item)} 
          />
          // <li className="cart-list_item">{item.name}</li>
      ))}
    </ul>
  );

   const modalActions = (
     <div className="cart-actions">
       <button className="close" onClick={props.onHideCart}>Otkaži</button>
       {!emptyCart && (<button className="order" onClick={orderHandler}>Naruči</button>)}
     </div>
   );

  const orderModalContent = (
    <React.Fragment>
      {cartItems}
      <div className="cart-total">
        <span>Ukupno:</span>
        <span>{totalAmount} din</span>
      </div>
      {isCheckout &&  !emptyCart && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCloseCart={props.onHideCart}
        />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const didSubmitModalContent = (
    <React.Fragment>
      <h2 className="message">Vaša porudžbina je prosleđena restoranu!</h2>
      <div className="cart-actions">
        <button className="close" onClick={props.onHideCart}>Zatvori</button>
      </div>
    </React.Fragment>
  );


  return (
    <Modal onClick={props.onHideCart}>
      {/* {orderModalContent} */}
      {!didSubmit && orderModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;