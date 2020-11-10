import { Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../redux/actions/actions';
import { Modes } from '../../types';

import './ModesMenu.css';

const ModesMenu = () => {

    const dispatch: any = useDispatch();

    return (
        <div className="modes-menu">
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button
                    className="menu-item"
                    onClick={() => dispatch(toggleMode(Modes.Pomodoro))}
                >
                    {Modes.Pomodoro}
                </Button>
                <Button
                    className="menu-item"
                    onClick={() => dispatch(toggleMode(Modes.ShortBreak))}
                >
                    {Modes.ShortBreak}
                </Button>
                <Button 
                    className="menu-item"
                    onClick={() => dispatch(toggleMode(Modes.LongBreak))}
                >
                    {Modes.LongBreak}
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default ModesMenu;
