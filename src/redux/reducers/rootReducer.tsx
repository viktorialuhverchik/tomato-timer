import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { timerReducer } from './timerReducer';

export const rootReducer = combineReducers({
    app: appReducer,
    timer: timerReducer
});