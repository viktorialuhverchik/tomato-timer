import { TimerState, UpdateTime, UPDATE_TIME } from '../types';

const initialState: TimerState = {
    minutes: 0,
    seconds: 0
};

export const timerReducer = (state = initialState, action: UpdateTime) => {
    switch (action.type) {
        case UPDATE_TIME:
            let minutes = Math.floor(action.seconds / 60);
            let seconds = action.seconds - (minutes * 60);
            return {...state, minutes, seconds};
        default: 
            return state;
    };
};
