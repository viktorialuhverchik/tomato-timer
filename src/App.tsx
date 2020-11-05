import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Timer from './components/Timer/Timer';
import Buttons from './components/Buttons/Buttons';

import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Menu />
            <Timer />
            <Buttons />
        </div>
    );
};

export default App;
