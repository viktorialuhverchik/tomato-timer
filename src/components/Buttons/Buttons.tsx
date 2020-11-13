import React, { FC } from 'react';
import { Button, withStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { toggleStart } from '../../redux/actions/actions';

import './Buttons.css';

const ButtonStart = withStyles(() => ({
    root: {
        color: '#f7edea',
        backgroundColor: '#47802b',
        '&:hover': {
            backgroundColor: '#407028',
        },
        marginRight: '5px'
    },
}))(Button);

const ButtonStop = withStyles(() => ({
    root: {
        color: '#f7edea',
        backgroundColor: '#ac1406',
        '&:hover': {
            backgroundColor: '#911307',
        },
        marginRight: '5px'
    },
}))(Button);

const Buttons: FC = () => {

    const dispatch: any = useDispatch();

    return (
        <div className="buttons">
            <ButtonStart
                variant="outlined"
                color="primary"
                className="button start"
                onClick={() => dispatch(toggleStart(true))}
            >
                Start
            </ButtonStart>
            <ButtonStop 
                variant="outlined"
                color="secondary"
                className="button stop"
                onClick={() => dispatch(toggleStart(false))}
            >
                Stop
            </ButtonStop>
        </div>
    );
};

export default Buttons;
