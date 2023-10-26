import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    
    return (
        <NavLink
            className='active:bg-gradient-to-r from-cyan-500 to-blue-500'
            to={to}
        >{children}</NavLink>
    );
};

export default ActiveLink;