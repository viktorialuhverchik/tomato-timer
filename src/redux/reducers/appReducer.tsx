import { AppActionTypes, AppState, SHOW_LOG, SHOW_SETTINGS, TOGGLE_START } from '../types';

const initialState: AppState = {
    isStart: false,
    isShowSettings: false,
    isShowLog: false
};

export const appReducer = (state = initialState, action: AppActionTypes) => {
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
