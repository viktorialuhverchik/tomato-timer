import { Button, ButtonGroup } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMode, toggleStartLongBreak, toggleStartPomodoro, toggleStartShortBreak } from '../../redux/actions/actions';
import { Modes } from '../../types';

import './ModesMenu.css';

const ModesMenu = ({ mode, isStartPomodoro, isStartShortBreak, isStartLongBreak }: any) => {

    const dispatch: any = useDispatch();

    useEffect(() => {
        if (!isStartPomodoro && !isStartShortBreak && !isStartLongBreak) return;
        switch(mode) {
            case Modes.Pomodoro:
                if (isStartShortBreak) dispatch(toggleStartShortBreak(false));
                if (isStartLongBreak) dispatch(toggleStartLongBreak(false));
                return dispatch(toggleStartPomodoro(true));
            case Modes.ShortBreak:
                if (isStartPomodoro) dispatch(toggleStartPomodoro(false));
                if (isStartLongBreak) dispatch(toggleStartLongBreak(false));
                return dispatch(toggleStartShortBreak(true));
            case Modes.LongBreak:
                if (isStartPomodoro) dispatch(toggleStartPomodoro(false));
                if (isStartShortBreak) dispatch(toggleStartShortBreak(false));
                return dispatch(toggleStartLongBreak(true));
        }
    }, [mode]);

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
