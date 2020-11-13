import React, { FC, useCallback, useEffect } from 'react';
import Header from './components/Header/Header';
import ModesMenu from './components/ModesMenu/ModesMenu';
import Timer from './components/Timer/Timer';
import Buttons from './components/Buttons/Buttons';
import Hints from './components/Hints/Hints';
import Settings from './components/Settings/Settings';
import Log from './components/Log/Log';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode, toggleStart } from './redux/actions/actions';
import { ILogItem, Modes, State } from './types';

import './App.css';

const App: FC = () => {

    const dispatch: any = useDispatch();
    const isStart: boolean = useSelector((state: State) => state.app.isStart);
    const isShowSettings: boolean = useSelector((state: State) => state.app.isShowSettings);
    const isShowLog: boolean = useSelector((state: State) => state.app.isShowLog);
    const log: Array<ILogItem> = useSelector((state: State) => state.log);
    const mode: string = useSelector((state: State) => state.modes.mode);
    const timer: Object = useSelector((state: State) => state.timer);
    const pomodoro: number = useSelector((state: State) => state.modes.pomodoro);
    const shortBreak: number = useSelector((state: State) => state.modes.shortBreak);
    const longBreak: number = useSelector((state: State) => state.modes.longBreak);
    const soundUrl: string = useSelector((state: State) => state.modes.soundUrl);

    const handleKeyPress = useCallback((event: any) => {
        switch(event.key) {
            case " ":
                return isStart ? dispatch(toggleStart(false)) : dispatch(toggleStart(true));
            case "p":
                return dispatch(toggleMode(Modes.Pomodoro));
            case "s":
                return dispatch(toggleMode(Modes.ShortBreak));
            case "l":
                return dispatch(toggleMode(Modes.LongBreak));
            default:
                return;
        }
    }, [isStart]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);

        return () => {
        document.removeEventListener("keydown", handleKeyPress, false);
        };
    }, [handleKeyPress]);

    return (
        <div className="app">
            <Header isShowSettings={isShowSettings} isShowLog={isShowLog} />
            <ModesMenu isStart={isStart} mode={mode} />
            <Timer isStart={isStart} mode={mode} timer={timer} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} soundUrl={soundUrl} />
            <Buttons />
            <Hints />
            <Settings isShowSettings={isShowSettings} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} soundUrl={soundUrl} />
            <Log isShowLog={isShowLog} log={log} />
        </div>
    );
};

export default App;
