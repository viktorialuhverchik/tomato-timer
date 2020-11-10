import { CLEAR_LOG, SAVE_LOG } from '../types';

const initialState: any = [];

export const logReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SAVE_LOG:
            let updatedLog: any = state.map((item: any) => Object.assign({}, item));
            updatedLog.push(action.log);
            return updatedLog;
        case CLEAR_LOG:
            return initialState;
        default: 
            return state;
    };
};
