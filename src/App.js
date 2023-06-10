import React, { useState } from 'react';
import CartProvider from './store/CartProvider';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Layout/Footer';

import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showMesssage, setShowMessage] = useState(false)

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  const setShowMessageHandler = () => {
    setShowMessage(true)
  };

  const hideMessageHandler = () => {
    setShowMessage(false)
  };

  return <CartProvider >
    <div id="app">
      { showCart && <Cart onHideCart={hideCartHandler}/> }
      <Header onShowCart={showCartHandler} />
      <main>
        <Menu />
      </main>
    </div>
    </CartProvider>
}

export default App;
