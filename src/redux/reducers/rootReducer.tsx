import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { modesReducer } from './modesReducer';
import { timerReducer } from './timerReducer';
import { logReducer } from './logReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    modes: modesReducer,
    timer: timerReducer,
    log: logReducer
});