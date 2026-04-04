import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <li>
                <NavLink to= "/">Home</NavLink>
            </li>
            <li>
                <NavLink to = "/login">Login</NavLink>
            </li>
            <li></li>
            <li></li>
        </div>
    );
};

export default Header;