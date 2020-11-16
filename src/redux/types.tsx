import { ILogItem } from "../types";

export const TOGGLE_START = "TOGGLE_START";
export const TOGGLE_MODE = "TOGGLE_MODE";
export const UPDATE_TIME = "UPDATE_TIME";
export const SHOW_SETTINGS = "SHOW_SETTINGS";
export const SHOW_LOG = "SHOW_LOG";
export const SAVE_LOG = "SAVE_LOG";
export const CLEAR_LOG = "CLEAR_LOG";
export const CHANGE_POMODORO = "CHANGE_POMODORO";
export const CHANGE_SHORT_BREAK = "CHANGE_SHORT_BREAK";
export const CHANGE_LONG_BREAK = "CHANGE_LONG_BREAK";
export const INIT_MODES = "INIT_MODES";
export const CHANGE_SOUND = "CHANGE_SOUND";
export const CREATE_LOG = "CREATE_LOG";

export interface AppState {
    isStart: boolean,
    isShowSettings: boolean,
    isShowLog: boolean
};

export interface ModesState {
    mode: string,
    pomodoro: number,
    shortBreak: number,
    longBreak: number,
    soundUrl: string
};

export interface TimerState {
    minutes: number,
    seconds: number
};

interface ToggleStart {
    type: typeof TOGGLE_START,
    isStart: boolean
};

interface ShowSettings {
    type: typeof SHOW_SETTINGS,
    isShowSettings: boolean
};

interface ShowLog {
    type: typeof SHOW_LOG,
    isShowLog: boolean
};

interface ToggleMode {
    type: typeof TOGGLE_MODE,
    mode: string
};

interface ChangePomodoroTime {
    type: typeof CHANGE_POMODORO,
    pomodoro: string
};

interface ChangeShortBreakTime {
    type: typeof CHANGE_SHORT_BREAK,
    shortBreak: string
};

interface ChangeLongBreakTime {
    type: typeof CHANGE_LONG_BREAK,
    longBreak: string
};

interface ChangeSound {
    type: typeof CHANGE_SOUND,
    soundUrl: string
};

interface InitModes {
    type: typeof INIT_MODES
};

interface CreateLog {
    type: typeof CREATE_LOG,
    log: ILogItem[]
};

interface SaveLog {
    type: typeof SAVE_LOG,
    log: ILogItem[]
};

interface ClearLog {
    type: typeof CLEAR_LOG
};

export interface UpdateTime {
    type: typeof UPDATE_TIME,
    seconds: number
};

export type AppActionTypes = ToggleStart | ShowSettings | ShowLog;
export type LogActionTypes = CreateLog | SaveLog | ClearLog;
export type ModesActionTypes = ToggleMode | ChangePomodoroTime | ChangeShortBreakTime | ChangeLongBreakTime | ChangeSound | InitModes;
