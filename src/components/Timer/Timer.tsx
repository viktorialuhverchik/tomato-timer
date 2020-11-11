import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTime } from '../../redux/actions/actions';
import { Modes } from '../../types';

import './Timer.css';

const Timer = ({ isStartPomodoro, isStartShortBreak, isStartLongBreak, mode, time, pomodoro, shortBreak, longBreak }: any) => {

    const dispatch: any = useDispatch();
    const [seconds, setSeconds] = useState(pomodoro * 60);

    useEffect(() => {
        mode === Modes.ShortBreak ? 
        setSeconds(shortBreak * 60) : mode === Modes.LongBreak ?
        setSeconds(longBreak * 60) : setSeconds(pomodoro * 60);
    }, [mode, pomodoro, shortBreak, longBreak]);

    useEffect(() => {
        dispatch(updateTime(seconds));
    }, [seconds]);

    useEffect(() => {
        if (!isStartPomodoro && !isStartShortBreak && !isStartLongBreak) return;
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            console.log("Bzzz!");
        }
    }, [isStartPomodoro, isStartShortBreak, isStartLongBreak, seconds]);

    return (
        <div className="timer">
            <h1 className="timer-content">{time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
        </div>
    );
};

export default Timer;
