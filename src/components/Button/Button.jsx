import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="btn normal-case btn-gradient active:scale-95 border-none text-xs lg:text-lg">{children}</button>
    );
};

export default Button;