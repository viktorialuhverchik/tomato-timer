import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { playSound, saveLog, toggleStart, updateTime } from '../../redux/actions/actions';
import { DateOptions, ILogItem, Modes } from '../../types';

import './Timer.css';

const Timer = ({ isStart, mode, timer, pomodoro, shortBreak, longBreak, soundUrl }: any) => {

    const dispatch: any = useDispatch();
    const [seconds, setSeconds] = useState<number>(pomodoro * 60);
    const [timerId, setTimerId] = useState<number>(0);
    const [logItem, setLogItem] = useState<ILogItem>({
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
    }, [seconds]);

    useEffect(() => {
        if (!isStart) return;
        if (seconds > 0) {
            let timeId: any = setTimeout(() => setSeconds(seconds - 1), 1000);
            setTimerId(timeId);
        } else {
            console.log("Bzzz!", seconds);
            playSound(soundUrl);
            dispatch(toggleStart(false))
            clearTimeout(timerId);
        }
    }, [isStart, seconds]);

    useEffect(() => {
        if (isStart) {
            setLogItem({...logItem, id: Date.now(), session: mode, startTime: new Date().toLocaleDateString("en-US", DateOptions)});
        }
        if (!isStart && seconds === 0) {
            setLogItem({...logItem, endTime: new Date().toLocaleDateString("en-US", DateOptions)});
        }
    }, [isStart]);

    useEffect(() => {
        if (logItem.endTime && logItem.startTime) {
            dispatch(saveLog(logItem));
            setLogItem({...logItem, id: 0, session: "", startTime: "", endTime: ""});
        }
    }, [logItem.endTime]);

    return (
        <div className="timer">
            <h1 className="timer-content">{timer.minutes}:{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}</h1>
        </div>
    );
};

export default Timer;
