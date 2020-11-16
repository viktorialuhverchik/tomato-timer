import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { showLog, showSettings } from '../../redux/actions/actions';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsIcon from '@material-ui/icons/Settings';
import { PropsHeader } from '../../types';

import './Header.css';

const Header: FC<PropsHeader> = ({ isShowSettings, isShowLog }) => {

    const dispatch = useDispatch();

    const handleClickShowLog = () => {
        dispatch(showLog(!isShowLog));
    };

    const handleClickShowSettings = () => {
        dispatch(showSettings(!isShowSettings));
    };

    return (
        <div className="header">
            <h1 className="header-title">Tomato Timer</h1>

            <div className="button-wrapper">

                <AccessTimeIcon className="log-button" onClick={handleClickShowLog} />

                <SettingsIcon className="setting-button" onClick={handleClickShowSettings} />

            </div>
        </div>
    );
};

export default Header;
