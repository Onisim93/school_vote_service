import React from 'react';
import "./navbar.css";
import navItems from "../../helpers/navItems";
import NavItem from "./NavItem";

const Navbar = () => {

    return (
        <div>
            {navItems.map((item, index) => {
                return <NavItem key={index} item={item}/>;
            })}
        </div>
    );
};

export default Navbar;