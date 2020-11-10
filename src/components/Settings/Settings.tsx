import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { changeLongBreakTime, changePomodoroTime, changeShortBreakTime, initModes, showSettings } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

import './Settings.css';
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
import { Modes } from '../../types';

const sounds: any = ["1", "2", "3", "4"];

const Settings = ({  isShowSettings, pomodoro, shortBreak, longBreak }: any) => {

    const dispatch: any = useDispatch();
    const [value, setValue] = useState(30);

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
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
                                value={typeof value === 'number' ? value : 0}
                                onChange={(event, newValue) => setValue(+newValue)}
                                aria-labelledby="input-slider"
                            />
                            </Grid>
                            <Grid item>
                            <Input
                                className=""
                                value={value}
                                margin="dense"
                                onChange={(event) => setValue(+event.target.value)}
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
                            value={pomodoro}
                            onChange={(event) => dispatch(changePomodoroTime(+event.target.value))}
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-multiline-flexible"
                            label={Modes.ShortBreak}
                            multiline
                            value={shortBreak}
                            onChange={(event) => dispatch(changeShortBreakTime(+event.target.value))}
                            variant="outlined"
                        />
                        <TextField
                            className="input"
                            id="outlined-multiline-flexible"
                            label={Modes.LongBreak}
                            multiline
                            value={longBreak}
                            onChange={(event) => dispatch(changeLongBreakTime(+event.target.value))}
                            variant="outlined"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={() => dispatch(showSettings(!isShowSettings))} color="primary">
                        Save
                    </Button>
                    <Button onClick={() => dispatch(initModes())} color="primary">
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
