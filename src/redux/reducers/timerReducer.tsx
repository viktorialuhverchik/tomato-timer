import { UPDATE_TIME } from '../types';

const initialState = {
    time: {
        minutes: 0,
        seconds: 0
    }
};

export const timerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_TIME:
            let minutes = Math.floor(action.seconds / 60);
            let seconds = action.seconds - (minutes * 60);
            let updatedTime = Object.assign({}, state.time, {minutes, seconds});
            return {...state, time: updatedTime};
        default: 
            return state;
    };
};
