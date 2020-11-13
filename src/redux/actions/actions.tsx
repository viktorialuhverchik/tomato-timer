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
    TOGGLE_START,
    CHANGE_SOUND,
    CREATE_LOG,
    AppActionTypes
} from "../types";

export const toggleStart = (isStart: boolean): AppActionTypes => ({
    type: TOGGLE_START,
    isStart
});

export const showSettings = (isShowSettings: boolean): AppActionTypes => ({
    type: SHOW_SETTINGS,
    isShowSettings
});

export const showLog = (isShowLog: boolean): AppActionTypes => ({
    type: SHOW_LOG,
    isShowLog
});

export const toggleMode = (mode: string) => ({
    type: TOGGLE_MODE,
    mode
});

export const updateTime = (seconds: number) => ({
    type: UPDATE_TIME,
    seconds
});

export const createLog = (log: any) => ({
    type: CREATE_LOG,
    log
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
