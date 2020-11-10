import React from 'react';
import Header from './components/Header/Header';
import ModesMenu from './components/ModesMenu/ModesMenu';
import Timer from './components/Timer/Timer';
import Buttons from './components/Buttons/Buttons';
import Hints from './components/Hints/Hints';
import Settings from './components/Settings/Settings';
import Log from './components/Log/Log';

import './App.css';
import { useSelector } from 'react-redux';

const App = () => {

    const isStart: boolean = useSelector((state: any) => state.app.isStart);
    const isShowSettings: boolean = useSelector((state: any) => state.app.isShowSettings);
    const isShowLog: boolean = useSelector((state: any) => state.app.isShowLog);
    const mode: string = useSelector((state: any) => state.modes.mode);
    const time = useSelector((state: any) => state.timer.time);
    const pomodoro = useSelector((state: any) => state.modes.pomodoro);
    const shortBreak = useSelector((state: any) => state.modes.shortBreak);
    const longBreak = useSelector((state: any) => state.modes.longBreak);

    return (
        <div className="app">
            <Header isShowSettings={isShowSettings} isShowLog={isShowLog} />
            <ModesMenu />
            <Timer isStart={isStart} mode={mode} time={time} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} />
            <Buttons />
            <Hints />
            <Settings isShowSettings={isShowSettings} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} />
            <Log isShowLog={isShowLog} />
        </div>
    );
};

export default App;
