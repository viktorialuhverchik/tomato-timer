import React from 'react';
import Header from './components/Header/Header';
import ModesMenu from './components/ModesMenu/ModesMenu';
import Timer from './components/Timer/Timer';
import Buttons from './components/Buttons/Buttons';
import Hints from './components/Hints/Hints';

import './App.css';
import { useSelector } from 'react-redux';

const App = () => {

    const mode: string = useSelector((state: any) => state.timer.mode);
    const isStart: boolean = useSelector((state: any) => state.app.isStart);

    return (
        <div className="app">
            <Header />
            <ModesMenu />
            <Timer isStart={isStart} mode={mode} />
            <Buttons />
            <Hints />
        </div>
    );
};

export default App;
