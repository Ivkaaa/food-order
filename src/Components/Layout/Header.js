import React from "react";
import { Fragment, useState } from 'react';
import HeaderCartButton from "./HeaderCartButton";
import heroImage from '../../img/hero-image.jpg'

import './Header.css';

const Header = props => {
    const [showH1, setSowH1] = useState(true);
    const message = <p>to je to drugari</p>
    const hideH1Handler = () => {
        setSowH1(false)
    }
    return (
      <Fragment>
        <header>
          {showH1 && (
            <h1 onClick={hideH1Handler}>
              PastaBar
            </h1>
          )}
          {!showH1 && message}
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className="hero-image">
          <img src={heroImage} alt="food" />
        </div>
      </Fragment>
    );
};

export default Header;