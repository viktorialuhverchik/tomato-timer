import React from 'react';
import { useDispatch } from 'react-redux';
import { showLog, showSettings } from '../../redux/actions/actions';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsIcon from '@material-ui/icons/Settings';

import './Header.css';

const Header = ({ isShowSettings, isShowLog }: any) => {

    const dispatch: any = useDispatch();

    return (
        <div className="header">
            <h1 className="header-title">Tomato Timer</h1>
            <div className="button-wrapper">
                <AccessTimeIcon className="log-button" onClick={() => dispatch(showLog(!isShowLog))} />
                <SettingsIcon className="setting-button" onClick={() => dispatch(showSettings(!isShowSettings))} />
            </div>
        </div>
    );
};

export default Header;
