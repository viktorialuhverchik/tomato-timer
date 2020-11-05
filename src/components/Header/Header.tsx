import React from 'react';
import Settings from '../Settings/Settings';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">Tomato Timer</h1>
            <Settings />
        </div>
    );
};

export default Header;
