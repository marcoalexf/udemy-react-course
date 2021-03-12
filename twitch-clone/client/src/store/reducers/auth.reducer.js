const initialState = {
    loggedIn: false,
}

export default (state = initialState, { type, payload }) => {
    debugger;
    switch (type) {
        case '[AUTH] Login':
            return { ...state, loggedIn: payload }

        case '[AUTH] Logout':
            return { ...state, loggedIn: payload }

        default:
            return state
    }
}
