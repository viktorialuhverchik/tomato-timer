import { TOGGLE_MODE, TOGGLE_START } from "../types";

export const toggleStart = (isStart: boolean) => ({
    type: TOGGLE_START,
    isStart
});

export const toggleMode = (mode: string) => ({
    type: TOGGLE_MODE,
    mode
});
