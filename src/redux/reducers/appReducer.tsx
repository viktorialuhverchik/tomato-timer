import { SHOW_LOG, SHOW_SETTINGS } from '../types';

const initialState = {
    isShowSettings: false,
    isShowLog: false
};

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_SETTINGS:
            return {...state, isShowSettings: action.isShowSettings};
        case SHOW_LOG:
            return {...state, isShowLog: action.isShowLog};
        default: 
            return state;
    };
};
