import React from "react";
import Meals from "./Meals";
import MenuSummary from "./MenuSummary";

import'./Menu.css';

const Menu = () => {

    return <React.Fragment>
        <MenuSummary />
        <Meals />
    </React.Fragment>
};
export default Menu;