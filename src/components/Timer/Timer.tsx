import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { playSound, saveLog, updateTime } from '../../redux/actions/actions';
import { stopTimer } from '../../redux/actions/helpers';
import { DateOptions, Modes } from '../../types';

import './Timer.css';

const Timer = ({ isStartPomodoro, isStartShortBreak, isStartLongBreak, mode, time, pomodoro, shortBreak, longBreak, soundUrl }: any) => {

    const dispatch: any = useDispatch();
    const [seconds, setSeconds] = useState(pomodoro * 60);
    const [timerId, setTimerId] = useState(0);
    const [logItem, setLogItem] = useState({
        id: 0,
        session: "",
        startTime: "",
        endTime: "",
        description: ""
    });

    useEffect(() => {
        mode === Modes.ShortBreak ? 
        setSeconds(shortBreak * 60) : mode === Modes.LongBreak ?
        setSeconds(longBreak * 60) : setSeconds(pomodoro * 60);
    }, [mode, pomodoro, shortBreak, longBreak]);

    useEffect(() => {
        dispatch(updateTime(seconds));
        if (!isStartPomodoro && !isStartShortBreak && !isStartLongBreak) return;
        if (seconds > 0) {
            let timeId: any = setTimeout(() => setSeconds(seconds - 1), 1000);
            setTimerId(timeId);
        } else {
            console.log("Bzzz!");
            playSound(soundUrl);
        }
        return () => clearTimeout(timerId);
    }, [isStartPomodoro, isStartShortBreak, isStartLongBreak, seconds]);

    useEffect(() => {
        if (!isStartPomodoro && !isStartShortBreak && !isStartLongBreak) return;
        setLogItem({...logItem, id: Date.now(), session: mode, startTime: new Date().toLocaleDateString("en-US", DateOptions)});
        setLogItem({...logItem, endTime: new Date().toLocaleDateString("en-US", DateOptions)});
        dispatch(saveLog(logItem));
    }, [isStartPomodoro, isStartShortBreak, isStartLongBreak]);

    return (
        <div className="timer">
            <h1 className="timer-content">{time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
        </div>
    );
};

export default Timer;
