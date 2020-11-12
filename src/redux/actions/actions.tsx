import {
    UPDATE_TIME,
    SHOW_SETTINGS,
    TOGGLE_MODE,
    SHOW_LOG,
    SAVE_LOG,
    CLEAR_LOG,
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    CHANGE_LONG_BREAK,
    INIT_MODES,
    TOGGLE_START_POMODORO,
    TOGGLE_START_SHORT,
    TOGGLE_START_LONG,
    CHANGE_SOUND
} from "../types";

export const toggleStartPomodoro = (isStartPomodoro: boolean) => ({
    type: TOGGLE_START_POMODORO,
    isStartPomodoro
});

export const toggleStartShortBreak = (isStartShortBreak: boolean) => ({
    type: TOGGLE_START_SHORT,
    isStartShortBreak
});

export const toggleStartLongBreak = (isStartLongBreak: boolean) => ({
    type: TOGGLE_START_LONG,
    isStartLongBreak
});

export const toggleMode = (mode: string) => ({
    type: TOGGLE_MODE,
    mode
});

export const updateTime = (seconds: number) => ({
    type: UPDATE_TIME,
    seconds
});

export const showSettings = (isShowSettings: boolean) => ({
    type: SHOW_SETTINGS,
    isShowSettings
});

export const showLog= (isShowLog: boolean) => ({
    type: SHOW_LOG,
    isShowLog
});

export const saveLog= (log: any) => ({
    type: SAVE_LOG,
    log
});

export const clearLog= () => ({
    type: CLEAR_LOG
});

export const changePomodoroTime = (pomodoroTime: number) => ({
    type: CHANGE_POMODORO,
    pomodoroTime
});

export const changeShortBreakTime = (shortBreakTime: number) => ({
    type: CHANGE_SHORT_BREAK,
    shortBreakTime
});

export const changeLongBreakTime = (longBreakTime: number) => ({
    type: CHANGE_LONG_BREAK,
    longBreakTime
});

export const changeSound = (soundUrl: string) => ({
    type: CHANGE_SOUND,
    soundUrl
});

export const initModes = () => ({
    type: INIT_MODES
});

export const playSound = (soundUrl: string) => {
    let sound = new Audio(soundUrl);
    sound.play();
};
