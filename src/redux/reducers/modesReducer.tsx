import { Modes } from '../../types';
import {
    CHANGE_LONG_BREAK,
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    INIT_MODES,
    TOGGLE_MODE
} from '../types';

const initialState = {
    mode: Modes.Pomodoro,
    pomodoro: 30,
    shortBreak: 5,
    longBreak: 10
};

export const modesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return {...state, mode: action.mode};
        case CHANGE_POMODORO:
            return {...state, pomodoro: action.pomodoro};
        case CHANGE_SHORT_BREAK:
            return {...state, shortBreak: action.shortBreak};
        case CHANGE_LONG_BREAK:
            return {...state, longBreak: action.longBreak};
        case INIT_MODES:
            return initialState;
        default: 
            return state;
    };
};
