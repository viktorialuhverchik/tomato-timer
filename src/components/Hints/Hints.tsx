import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SettingsIcon from '@material-ui/icons/Settings';
import './Hints.css';
import { Modes } from '../../types';

const Hints: FC = () => {

    return (
        <div className="hints">
            <Card>
                <CardContent className="hints-wrapper">
                    <span className="hints-title">Keyboard shortcuts</span>
                    <ul>
                        <li>
                            <span className="shortcuts-text">
                                <span className="bold">P</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;{Modes.Pomodoro}
                            </span>
                        </li>

                        <li>
                            <span className="shortcuts-text">
                                <span className="bold">S</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;{Modes.ShortBreak}
                            </span>
                        </li>

                        <li>
                            <span className="shortcuts-text">
                                <span className="bold">L</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;{Modes.LongBreak}
                            </span>
                        </li>

                        <li>
                            <span className="shortcuts-text">
                                <span className="bold">SPACE</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;Start or Stop the timer
                            </span>
                        </li>
                    </ul>
                    <span className="hints-title">Notifications</span>
                    <div className="notifications-wrapper">
                        <span className="notifications-text">
                            You can change the audio tone and volume via Settings&nbsp;
                            <SettingsIcon fontSize="inherit"/>.
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Hints;
