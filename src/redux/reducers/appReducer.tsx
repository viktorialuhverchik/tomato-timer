import { SHOW_LOG, SHOW_SETTINGS, TOGGLE_START } from '../types';

const initialState = {
    isStart: false,
    isShowSettings: false,
    isShowLog: false
};

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_START:
            return {...state, isStart: action.isStart};
        case SHOW_SETTINGS:
            return {...state, isShowSettings: action.isShowSettings};
        case SHOW_LOG:
            return {...state, isShowLog: action.isShowLog};
        default: 
            return state;
    };
};
