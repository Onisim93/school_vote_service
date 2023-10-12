import React from 'react';
import "./navbar.css";

const NavItem = ({item}) => {
    return (
        <div>
            {item.title}
        </div>
    );
};

export default NavItem;