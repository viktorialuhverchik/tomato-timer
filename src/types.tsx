export interface ILogItem {
    id: number,
    session: string,
    startTime: string,
    endTime: string,
    description: string
}

export interface ITimer {
    minutes: number,
    seconds: number
}

export interface ISound {
    id: number,
    url: string,
    name: string
}

export interface State {
    app: {
        isStart: boolean,
        isShowSettings: boolean,
        isShowLog: boolean
    },
    log: Array<ILogItem>,
    modes: {
        mode: string,
        pomodoro: number,
        shortBreak: number,
        longBreak: number,
        soundUrl: string
    },
    timer: {
        minutes: number,
        seconds: number
    }
}

export interface PropsHeader {
    isShowSettings: boolean,
    isShowLog: boolean
}

export interface PropsLog {
    isShowLog: boolean,
    log: Array<ILogItem>
}

export interface PropsModesMenu {
    isStart: boolean,
    mode: string
}

export interface PropsSettings {
    isShowSettings: boolean,
    pomodoro: number,
    shortBreak: number,
    longBreak: number,
    soundUrl: string
}

export interface PropsTimer {
    isStart: boolean,
    mode: string,
    timer: ITimer,
    pomodoro: number,
    shortBreak: number,
    longBreak: number,
    soundUrl: string
}

export enum Modes {
    Pomodoro = "Pomodoro",
    ShortBreak = "Short break",
    LongBreak = "Long break"
}

export enum Sounds {
    AlarmBeepElectronic = "/sounds/alarm-beep-electronic.wav",
    AlarmClock = "/sounds/alarm-clock.mp3",
    CellphoneAlarmClock = "/sounds/cellphone-alarm-clock.mp3",
    OldClock = "/sounds/old-clock.wav",
    Wakey = "/sounds/wakey.wav"
}

export enum DateOptions {
    year = "numeric",
    month = "long",
    day = "numeric",
    hour = "numeric",
    minute = "numeric",
    second = "numeric"
};
