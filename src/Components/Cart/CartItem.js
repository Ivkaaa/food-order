import './CartItem.css';

const CartItem = (props) => {
  const price = `${props.price} din`;

  return <li className='cart-item'>
    <div className='wrapp-info'>
      <h2>{props.name}</h2>
      <div className='info'>
        <span className='price'>{price}</span>
        <span className='amount'>{props.amount}</span>
      </div>
      
    </div>
    <div className='actions'>
      <button onClick={props.onItemRemove}>-</button>
      <button onClick={props.onItemAdd}>+</button>
    </div>
  </li>
};

export default CartItem;

