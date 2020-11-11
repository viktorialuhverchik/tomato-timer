import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { startTimer, stopTimer } from '../../redux/actions/helpers';

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

const Buttons = ({ mode }: any) => {

    const dispatch: any = useDispatch();

    return (
        <div className="buttons">
            <ButtonStart
                variant="outlined"
                color="primary"
                className="button start"
                onClick={() => startTimer(mode, dispatch)}
            >
                Start
            </ButtonStart>
            <ButtonStop 
                variant="outlined"
                color="secondary"
                className="button stop"
                onClick={() => stopTimer(mode, dispatch)}
            >
                Stop
            </ButtonStop>
            <Button 
                variant="outlined"
                className="button reset"
                onClick={() => console.log("reset")}
            >
                Reset
            </Button>
        </div>
    );
};

export default Buttons;
