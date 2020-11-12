import { Button, ButtonGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../redux/actions/actions';
import { Modes } from '../../types';

import './ModesMenu.css';

const ModesMenu = ({ mode, isStartPomodoro, isStartShortBreak, isStartLongBreak }: any) => {

    const dispatch: any = useDispatch();
    const [isDisabledPomodoro, setIsDisabledPomodoro] = useState(false);
    const [isDisabledShortBreak, setIsDisabledShortBreak] = useState(false);
    const [isDisabledLongBreak, setIsDisabledLongBreak] = useState(false);

    useEffect(() => {
        if (!isStartPomodoro && !isStartShortBreak && !isStartLongBreak) {
            setIsDisabledPomodoro(false);
            setIsDisabledShortBreak(false);
            setIsDisabledLongBreak(false);
        };
        switch(mode) {
            case Modes.Pomodoro:
                if (isStartPomodoro) {
                    setIsDisabledShortBreak(true);
                    setIsDisabledLongBreak(true);
                };
                break;
            case Modes.ShortBreak:
                if (isStartShortBreak) {
                    setIsDisabledPomodoro(true);
                    setIsDisabledLongBreak(true);
                };
                break;
            case Modes.LongBreak:
                if (isStartLongBreak) {
                    setIsDisabledPomodoro(true);
                    setIsDisabledShortBreak(true);
                };
                break;
        }
    }, [mode, isStartPomodoro, isStartShortBreak, isStartLongBreak]);

    return (
        <div className="modes-menu">
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button
                    className={`menu-item ${!isDisabledPomodoro ? "" : "disabled"}`}
                    onClick={() => dispatch(toggleMode(Modes.Pomodoro))}
                >
                    {Modes.Pomodoro}
                </Button>
                <Button
                    className={`menu-item ${!isDisabledShortBreak ? "" : "disabled"}`}
                    onClick={() => dispatch(toggleMode(Modes.ShortBreak))}
                >
                    {Modes.ShortBreak}
                </Button>
                <Button 
                    className={`menu-item ${!isDisabledLongBreak ? "" : "disabled"}`}
                    onClick={() => dispatch(toggleMode(Modes.LongBreak))}
                >
                    {Modes.LongBreak}
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default ModesMenu;
