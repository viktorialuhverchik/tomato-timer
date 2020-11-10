import {
    UPDATE_TIME,
    SHOW_SETTINGS,
    TOGGLE_MODE,
    TOGGLE_START,
    SHOW_LOG,
    SAVE_LOG,
    CLEAR_LOG,
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    CHANGE_LONG_BREAK,
    INIT_MODES
} from "../types";

export const toggleStart = (isStart: boolean) => ({
    type: TOGGLE_START,
    isStart
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

export const changePomodoroTime = (pomodoro: number) => ({
    type: CHANGE_POMODORO,
    pomodoro
});

export const changeShortBreakTime = (shortBreak: number) => ({
    type: CHANGE_SHORT_BREAK,
    shortBreak
});

export const changeLongBreakTime = (longBreak: number) => ({
    type: CHANGE_LONG_BREAK,
    longBreak
});

export const initModes = () => ({
    type: INIT_MODES
});
