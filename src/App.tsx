import React, { useCallback, useEffect } from 'react';
import Header from './components/Header/Header';
import ModesMenu from './components/ModesMenu/ModesMenu';
import Timer from './components/Timer/Timer';
import Buttons from './components/Buttons/Buttons';
import Hints from './components/Hints/Hints';
import Settings from './components/Settings/Settings';
import Log from './components/Log/Log';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from './redux/actions/actions';
import { Modes } from './types';
import { startTimer, stopTimer } from './redux/actions/helpers';

const App = () => {

    const dispatch: any = useDispatch();
    const isShowSettings: boolean = useSelector((state: any) => state.app.isShowSettings);
    const isShowLog: boolean = useSelector((state: any) => state.app.isShowLog);
    const log: boolean = useSelector((state: any) => state.log.log);
    const mode: string = useSelector((state: any) => state.modes.mode);
    const time: number = useSelector((state: any) => state.timer.time);
    const pomodoro: number = useSelector((state: any) => state.modes.pomodoro.time);
    const shortBreak: number = useSelector((state: any) => state.modes.shortBreak.time);
    const longBreak: number = useSelector((state: any) => state.modes.longBreak.time);
    const isStartPomodoro: number = useSelector((state: any) => state.modes.pomodoro.isStart);
    const isStartShortBreak: number = useSelector((state: any) => state.modes.shortBreak.isStart);
    const isStartLongBreak: number = useSelector((state: any) => state.modes.longBreak.isStart);
    const soundUrl: string = useSelector((state: any) => state.modes.soundUrl);

    const handleKeyPress = useCallback((event: any) => {
        switch(event.key) {
            case " ":
                return isStartPomodoro || isStartShortBreak || isStartLongBreak ? stopTimer(mode, dispatch) : startTimer(mode, dispatch);
            case "p":
                return dispatch(toggleMode(Modes.Pomodoro));
            case "s":
                return dispatch(toggleMode(Modes.ShortBreak));
            case "l":
                return dispatch(toggleMode(Modes.LongBreak));
            case "r":
                return;
            default:
                return;
        }
    }, [isStartPomodoro, isStartShortBreak, isStartLongBreak]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);

        return () => {
        document.removeEventListener("keydown", handleKeyPress, false);
        };
    }, [handleKeyPress]);

    return (
        <div className="app">
            <Header isShowSettings={isShowSettings} isShowLog={isShowLog} />
            <ModesMenu mode={mode} isStartPomodoro={isStartPomodoro} isStartShortBreak={isStartShortBreak} isStartLongBreak={isStartLongBreak} />
            <Timer isStartPomodoro={isStartPomodoro} isStartShortBreak={isStartShortBreak} isStartLongBreak={isStartLongBreak} mode={mode} time={time} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} soundUrl={soundUrl} />
            <Buttons mode={mode} />
            <Hints />
            <Settings isShowSettings={isShowSettings} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} soundUrl={soundUrl} />
            <Log isShowLog={isShowLog} log={log} />
        </div>
    );
};

export default App;
