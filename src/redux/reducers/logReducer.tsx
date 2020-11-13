import { ILogItem } from '../../types';
import { CLEAR_LOG, CREATE_LOG, LogActionTypes, SAVE_LOG } from '../types';

const initialState: any = [];

export const logReducer = (state = initialState, action: LogActionTypes) => {
    switch (action.type) {
        case CREATE_LOG:
            return [...action.log];
        case SAVE_LOG:
            let updatedLog: any = state.map((item: ILogItem) => Object.assign({}, item));
            updatedLog.push(Object.assign({}, action.log));
            localStorage.setItem("log", JSON.stringify(updatedLog));
            return updatedLog;
        case CLEAR_LOG:
            localStorage.removeItem("log");
            return initialState;
        default: 
            return state;
    };
};
