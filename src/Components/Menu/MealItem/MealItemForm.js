import React, { useRef, useState } from "react";
import Input from "./Input";

import './MealItemForm.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value // this value is always string
        const enteredAmountConvertToNumber = + enteredAmount //converted string to number 

        // verification - if values isn't valid, a message is displayed
        if (enteredAmount.trim().length === 0 || enteredAmountConvertToNumber < 1) {
            setAmountIsValid(false);
            return;
        }

        // because we don't have eny other info (id, name or price) we well get to the props from the other component
        props.onAddToCart(enteredAmountConvertToNumber);

    };

    return <form className="form" onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label='Količina:' 
            input={{
                id:'amount_' + props.id,
                type: 'number',
                min:'1',
                defaultValue: '1'
            }}
        />
        <button>Dodaj</button>
        {/* if input amount isn't valid the message will show */}
        {!amountIsValid && <p className="error-msg">Unesite validan iznos!</p>}
    </form>
};

export default MealItemForm;
