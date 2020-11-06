import { TOGGLE_START } from '../types';

const initialState = {
    isStart: false
};

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_START:
            return {...state, isStart: action.isStart};
        default: 
            return state;
    };
};
