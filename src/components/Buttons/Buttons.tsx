import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStart } from '../../redux/actions/actions';

import './Buttons.css';

const Buttons = () => {

    const dispatch: any = useDispatch();

    return (
        <div className="buttons">
            <button className="button start" onClick={() => dispatch(toggleStart(true))}>Start</button>
            <button className="button stop" onClick={() => dispatch(toggleStart(false))}>Stop</button>
            <button className="button reset" onClick={() => console.log("reset")}>Reset</button>
        </div>
    );
};

export default Buttons;
