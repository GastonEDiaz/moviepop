import * as Types from "./types";

export const setElement = (value) => ({ type: Types.SET_ELEMENT, value });
export const clearElements = () => ({ type: Types.CLEAR_STORE });
