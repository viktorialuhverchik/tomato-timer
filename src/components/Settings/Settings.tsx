import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    Input,
    Select,
    Slider,
    TextField
} from '@material-ui/core';
import { VolumeUp } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import {
    changeLongBreakTime,
    changePomodoroTime,
    changeShortBreakTime,
    showSettings
} from '../../redux/actions/actions';
import { Modes } from '../../types';

import './Settings.css';
import { initialState } from '../../redux/reducers/modesReducer';

const sounds: any = ["1", "2", "3", "4"];

const Settings = ({  isShowSettings, pomodoro, shortBreak, longBreak }: any) => {

    const dispatch: any = useDispatch();
    const [volume, setVolume] = useState(30);
    const [newPomodoro, setNewPomodoro] = useState(pomodoro);
    const [newShortBreak, setNewShortBreak] = useState(shortBreak);
    const [newLongBreak, setNewLongBreak] = useState(longBreak);

    const handleBlur = () => {
        if (volume < 0) {
            setVolume(0);
        } else if (volume > 100) {
            setVolume(100);
        }
    };

    useEffect(() => {
        setNewPomodoro(pomodoro);
        setNewShortBreak(shortBreak);
        setNewLongBreak(longBreak);
    }, [pomodoro, shortBreak, longBreak]);

    const saveChangedTime = () => {
        dispatch(changePomodoroTime(newPomodoro));
        dispatch(changeShortBreakTime(newShortBreak));
        dispatch(changeLongBreakTime(newLongBreak));
        dispatch(showSettings(!isShowSettings));
    };

    const initSettings = () => {
        setVolume(30);
        setNewPomodoro(initialState.pomodoro);
        setNewShortBreak(initialState.shortBreak);
        setNewLongBreak(initialState.longBreak);
    };
    
    return (
        <div className="app-settings">
            <Dialog
                open={isShowSettings}
                keepMounted
                onClose={() => dispatch(showSettings(!isShowSettings))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="title-wrapper">
                    <DialogTitle id="alert-dialog-title">Settings</DialogTitle>
                    <CloseIcon className="close-button" onClick={() => dispatch(showSettings(!isShowSettings))} />
                </div>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        User preferences
                    </DialogContentText>
                    <div className="setting-item">
                        <Checkbox
                            defaultChecked
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <span>Timer indication in title?</span>
                    </div>

                    <DialogContentText id="alert-dialog-description">
                        Select sound
                    </DialogContentText>

                    <div className="setting-item">
                        <FormControl className="select-sound">
                            <Select
                                multiple
                                native
                                value={sounds}
                                onChange={() => console.log("input")}
                                inputProps={{
                                    id: 'select-multiple-native',
                                }}
                            >
                            {sounds.map((sound: any) => (
                                <option key={sound} value={sound}>
                                    {sound}
                                </option>
                            ))}
                            </Select>
                        </FormControl>
                    </div>

                    <DialogContentText id="alert-dialog-description">
                        Select volume
                    </DialogContentText>
                    <div className="setting-item">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                            <VolumeUp />
                            </Grid>
                            <Grid item xs>
                            <Slider
                                value={typeof volume === 'number' ? volume : 0}
                                onChange={(event, newVolume) => setVolume(+newVolume)}
                                aria-labelledby="input-slider"
                            />
                            </Grid>
                            <Grid item>
                            <Input
                                value={volume}
                                margin="dense"
                                onChange={(event) => setVolume(+event.target.value)}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                            />
                            </Grid>
                        </Grid>
                    </div>

                    <DialogContentText id="alert-dialog-description">
                        Set custom times (in minutes)
                    </DialogContentText>
                    <div className="input-wrapper">
                        <TextField
                            className="input"
                            id="outlined-multiline-flexible"
                            label={Modes.Pomodoro}
                            multiline
                            value={newPomodoro}
                            onChange={(event) => setNewPomodoro(+event.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-multiline-flexible"
                            label={Modes.ShortBreak}
                            multiline
                            value={newShortBreak}
                            onChange={(event) => setNewShortBreak(+event.target.value)}
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-multiline-flexible"
                            label={Modes.LongBreak}
                            multiline
                            value={newLongBreak}
                            onChange={(event) => setNewLongBreak(+event.target.value)}
                            variant="outlined"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={saveChangedTime} color="primary">
                        Save
                    </Button>
                    <Button onClick={initSettings} color="primary">
                        Reset
                    </Button>
                    <Button onClick={() => dispatch(showSettings(!isShowSettings))} color="primary">
                        Sound test
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Settings;
