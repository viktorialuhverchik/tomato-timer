import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modes } from '../../types';

import './Timer.css';

const Timer = ({ isStart, mode }: any) => {

    const pomodoro = useSelector((state: any) => state.timer.pomodoro);
    const shortBreak = useSelector((state: any) => state.timer.shortBreak);
    const longBreak = useSelector((state: any) => state.timer.longBreak);
    const [time, setTime] = useState(
        {
            minutes: 0,
            seconds: 0
        }
    );
    const [seconds, setSeconds] = useState(0);

    const converterTime = (seconds: number) => {
        let min = Math.floor(seconds / 60);
        let sec = seconds - (min * 60); 
        setTime({minutes: min, seconds: sec});
    };

    useEffect(() => {
        mode === Modes.ShortBreak ? 
        setSeconds(shortBreak * 60) : mode === Modes.LongBreak ?
        setSeconds(longBreak * 60) : setSeconds(pomodoro * 60);
    }, [mode]);

    useEffect(() => {
        converterTime(seconds);
    }, [seconds]);

    useEffect(() => {
        if (!isStart) return;
        if (time.minutes > 0 && time.seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            console.log("Bzzz!");
        }
    }, [isStart, seconds]);

    return (
        <div className="timer">
            <h1 className="timer-content">{time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
        </div>
    );
};

export default Timer;
