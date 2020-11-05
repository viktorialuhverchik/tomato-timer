import React from 'react';

import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <button className="menu-item" onClick={() => console.log("click")}>Pomodoro</button>
            <button className="menu-item" onClick={() => console.log("click")}>Short Break</button>
            <button className="menu-item" onClick={() => console.log("click")}>Long Break</button>
        </div>
    );
};

export default Menu;
