import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header>
            <div className={"mini-logo"}>VOTE</div>
            <div>Main</div>
            <div>Login</div>
            <div>Register</div>
            <div>Account</div>
        </header>
    );
};

export default Header;