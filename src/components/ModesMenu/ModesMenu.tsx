import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../redux/actions/actions';
import { Modes } from '../../types';

import './ModesMenu.css';

const ModesMenu = () => {

    const dispatch: any = useDispatch();

    return (
        <div className="modes-menu">
            <button
                className="menu-item"
                onClick={() => dispatch(toggleMode(Modes.Pomodoro))}
            >
                Pomodoro
            </button>
            <button
                className="menu-item"
                onClick={() => dispatch(toggleMode(Modes.ShortBreak))}
            >
                Short Break
            </button>
            <button
                className="menu-item"
                onClick={() => dispatch(toggleMode(Modes.LongBreak))}
            >
                Long Break
            </button>
        </div>
    );
};

export default ModesMenu;
