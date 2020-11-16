import { ILogItem } from '../../types';
import { CLEAR_LOG, CREATE_LOG, LogActionTypes, SAVE_LOG } from '../types';

const initialState: ILogItem[] = [];

export const logReducer = (state = initialState, action: LogActionTypes) => {
    switch (action.type) {
        case CREATE_LOG:
            return [...action.log];
        case SAVE_LOG:
            const copiedLog: ILogItem[] = state.map((item: ILogItem | null) => Object.assign({}, item));
            const updatedLog: ILogItem[] = copiedLog.concat(Object.assign({}, action.log));
            localStorage.setItem("log", JSON.stringify(updatedLog));
            return updatedLog;
        case CLEAR_LOG:
            localStorage.removeItem("log");
            return initialState;
        default:
            return state;
    };
};
