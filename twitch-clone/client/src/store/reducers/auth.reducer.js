import { SIGN_IN, SIGN_OUT, UPDATE_FORM_STATE } from "../actions/types";

const initialState = {
    loggedIn: false,
    userId: null,
}

export default (state = initialState, { type, payload }) => {
    debugger;
    switch (type) {
        case SIGN_IN:
            return { ...state, loggedIn: true, userId: payload.userId }

        case SIGN_OUT:
            return { ...state, loggedIn: payload, userId: null }

        case UPDATE_FORM_STATE:
            return {
                ...state,
                [payload.formId]: payload.form?.values
            }

        default:
            return state
    }
}
