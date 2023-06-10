import React, { useContext} from "react";
import MealItemForm from "./MealItemForm";
import CartContext from '../../../store/CartContext';

import './MealItem.css';

const MealItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `${props.price} din`;
    
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return <li className="meals-list_item">
        <div>
            <h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            <div className="price">{price}</div> 
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>      
    </li>
};

export default MealItem;