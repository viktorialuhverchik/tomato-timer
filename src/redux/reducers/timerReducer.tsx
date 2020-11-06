import { Modes } from '../../types';
import { TOGGLE_MODE } from '../types';

const initialState = {
    mode: Modes.Pomodoro,
    pomodoro: 30,
    shortBreak: 5,
    longBreak: 10
};

export const timerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return {...state, mode: action.mode};
        default: 
            return state;
    };
};
