import React, { FC, useEffect, useState } from 'react';
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
    changeSound,
    playSound,
    showSettings
} from '../../redux/actions/actions';
import { ISound, Modes, PropsSettings, Sounds } from '../../types';
import { initialState } from '../../redux/reducers/modesReducer';

import './Settings.css';

const sounds: ISound[] = [
    {id: 1, url: Sounds.AlarmBeepElectronic, name: "Alarm Beep Electronic"},
    {id: 2, url: Sounds.AlarmClock, name: "Alarm Clock"},
    {id: 3, url: Sounds.CellphoneAlarmClock, name: "Cellphone Alarm Clock"},
    {id: 4, url: Sounds.OldClock, name: "Old Clock"},
    {id: 5, url: Sounds.Wakey, name: "Wakey"},
];

const Settings: FC<PropsSettings> = ({  isShowSettings, pomodoro, shortBreak, longBreak, soundUrl }) => {

    const dispatch = useDispatch();
    const [volume, setVolume] = useState<number>(30);
    const [newPomodoro, setNewPomodoro] = useState<number>(pomodoro);
    const [newShortBreak, setNewShortBreak] = useState<number>(shortBreak);
    const [newLongBreak, setNewLongBreak] = useState<number>(longBreak);

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

    const hamdleClickShowSettings = () => {
        dispatch(showSettings(!isShowSettings));
    };

    return (
        <div className="app-settings">
            <Dialog
                open={isShowSettings}
                keepMounted
                onClose={hamdleClickShowSettings}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="title-wrapper">
                    <DialogTitle id="alert-dialog-title">Settings</DialogTitle>
                    <CloseIcon className="close-button" onClick={hamdleClickShowSettings} />
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
                                onChange={(event) => dispatch(changeSound(`${event.target.value}`))}
                                inputProps={{
                                    id: 'select-multiple-native',
                                }}
                            >
                            {sounds.map((sound: ISound) => (
                                <option key={sound.id} value={sound.url}>
                                    {sound.name}
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

                    <Button onClick={() => playSound(soundUrl)} color="primary">
                        Sound test
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Settings;
