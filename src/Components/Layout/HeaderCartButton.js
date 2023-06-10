import React, { useContext, useEffect, useState } from "react";
import CartContext from '../../store/CartContext';

import './HeaderCartButton.css';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currentNumb, item) => {
        return currentNumb + item.amount;
    }, 0);

    const {items} = cartCtx
    const btnClasses = `button ${btnIsHighlighted ? 'bump' : ''}`;
    useEffect( () => {
        if(items.length === 0){
            return
        };
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        },300);

        return () => {
            clearTimeout(timer)
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/3737/3737151.png" alt="cart icon" />
        </span>
        <span>Korpa</span>
        <span className="badge">{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;
