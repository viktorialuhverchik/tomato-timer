import { ObjectFlags } from 'typescript';
import { Modes } from '../../types';
import {
    CHANGE_LONG_BREAK,
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    INIT_MODES,
    TOGGLE_MODE,
    TOGGLE_START_LONG,
    TOGGLE_START_POMODORO,
    TOGGLE_START_SHORT
} from '../types';

export const initialState = {
    mode: Modes.Pomodoro,
    pomodoro: { time: 30, isStart: false },
    shortBreak: { time: 5, isStart: false },
    longBreak: { time: 10, isStart: false }
};

export const modesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_START_POMODORO:
            let updatedPomodoro = {...state.pomodoro, isStart: action.isStartPomodoro};
            return {...state, pomodoro: updatedPomodoro};
        case TOGGLE_START_SHORT:
            let updatedShortBreak = {...state.pomodoro, isStart: action.isStartShortBreak};
            return {...state, pomodoro: updatedShortBreak};
        case TOGGLE_START_LONG:
            let updatedLongBreak = {...state.pomodoro, isStart: action.isStartLongBreak};
            return {...state, pomodoro: updatedLongBreak};
        case TOGGLE_MODE:
            return {...state, mode: action.mode};
        case CHANGE_POMODORO:
            let newPomodoro = {...state.pomodoro, time: action.pomodoroTime};
            return {...state, pomodoro: newPomodoro};
        case CHANGE_SHORT_BREAK:
            let newShortBreak = {...state.shortBreak, time: action.shortBreakTime};
            return {...state, shortBreak: newShortBreak};
        case CHANGE_LONG_BREAK:
            let newLongBreak = {...state.longBreak, time: action.longBreakTime};
            return {...state, longBreak: newLongBreak};
        case INIT_MODES:
            return initialState;
        default: 
            return state;
    };
};
