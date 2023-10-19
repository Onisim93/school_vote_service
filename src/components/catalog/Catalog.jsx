import React from 'react';
import Cart from "../cart/Cart";
import "./catalog.css"

const Catalog = () => {
    return (
        <div className={"catalog"}>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>

        </div>
    );
};

export default Catalog;