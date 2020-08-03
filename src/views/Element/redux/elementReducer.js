import * as Types from "./types";

const initialState = {
    movie: undefined,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Types.SET_ELEMENT:
            return { ...state, movie: action.movie};
        case Types.CLEAR_STORE:
            return { ...state, movie: undefined};
        default:
            return state;
    }
}