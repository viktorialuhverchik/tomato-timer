import { Modes, Sounds } from '../../types';
import {
    CHANGE_LONG_BREAK,
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    CHANGE_SOUND,
    INIT_MODES,
    ModesActionTypes,
    ModesState,
    TOGGLE_MODE
} from '../types';

export const initialState: ModesState = {
    mode: Modes.Pomodoro,
    pomodoro: 30,
    shortBreak: 1,
    longBreak: 10,
    soundUrl: Sounds.AlarmClock
};

export const modesReducer = (state = initialState, action: ModesActionTypes) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return {...state, mode: action.mode};
        case CHANGE_POMODORO:
            return {...state, pomodoro: action.pomodoro};
        case CHANGE_SHORT_BREAK:
            return {...state, shortBreak: action.shortBreak};
        case CHANGE_LONG_BREAK:
            return {...state, longBreak: action.longBreak};
        case CHANGE_SOUND:
            return {...state, soundUrl: action.soundUrl};
        case INIT_MODES:
            return initialState;
        default: 
            return state;
    };
};
