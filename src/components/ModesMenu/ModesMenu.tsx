import { Button, ButtonGroup } from '@material-ui/core';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../redux/actions/actions';
import { Modes, PropsModesMenu } from '../../types';

import './ModesMenu.css';

const ModesMenu: FC<PropsModesMenu> = ({ isStart, mode }) => {

    const dispatch = useDispatch();

    const handleClickToggleMode = (selectedMode: string) => {
        dispatch(toggleMode(selectedMode));
    };

    return (
        <div className="modes-menu">
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button
                    className={`menu-item ${((mode === Modes.ShortBreak && isStart) || (mode === Modes.LongBreak && isStart)) ? "disabled" : ""}`}
                    onClick={() => handleClickToggleMode(Modes.Pomodoro)}
                >
                    {Modes.Pomodoro}
                </Button>

                <Button
                    className={`menu-item ${((mode === Modes.Pomodoro && isStart) || (mode === Modes.LongBreak && isStart)) ? "disabled" : ""}`}
                    onClick={() => handleClickToggleMode(Modes.ShortBreak)}
                >
                    {Modes.ShortBreak}
                </Button>

                <Button
                    className={`menu-item ${((mode === Modes.ShortBreak && isStart) || (mode === Modes.Pomodoro && isStart)) ? "disabled" : ""}`}
                    onClick={() => handleClickToggleMode(Modes.LongBreak)}
                >
                    {Modes.LongBreak}
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default ModesMenu;
