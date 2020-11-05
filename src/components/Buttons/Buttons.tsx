import React from 'react';

import './Buttons.css';

const Buttons = () => {
    return (
        <div className="buttons">
            <button className="button start" onClick={() => console.log("click")}>Start</button>
            <button className="button stop" onClick={() => console.log("click")}>Stop</button>
            <button className="button reset" onClick={() => console.log("click")}>Reset</button>
        </div>
    );
};

export default Buttons;
