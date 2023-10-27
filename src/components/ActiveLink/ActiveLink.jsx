import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {

    return (
        <NavLink
            to={to}
            className={`hover:text-[#7E90FE]  ${({ isActive }) => isActive ? "active" : ""}`}
        >{children}
        </NavLink>
    );
};

export default ActiveLink;