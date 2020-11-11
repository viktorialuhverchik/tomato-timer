import { Modes } from '../../types';
import { toggleStartLongBreak, toggleStartPomodoro, toggleStartShortBreak } from './actions';


export const startTimer = (mode: string, dispatch: any) => {
    switch(mode) {
        case Modes.Pomodoro:
            return dispatch(toggleStartPomodoro(true));
        case Modes.ShortBreak:
            return dispatch(toggleStartShortBreak(true));
        case Modes.LongBreak:
            return dispatch(toggleStartLongBreak(true));
    }
};

export const stopTimer = (mode: string, dispatch: any) => {
    switch(mode) {
        case Modes.Pomodoro:
            return dispatch(toggleStartPomodoro(false));
        case Modes.ShortBreak:
            return dispatch(toggleStartShortBreak(false));
        case Modes.LongBreak:
            return dispatch(toggleStartLongBreak(false));
    }
};