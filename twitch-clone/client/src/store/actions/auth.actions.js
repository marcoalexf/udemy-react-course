import { SIGN_IN, SIGN_OUT, UPDATE_FORM_STATE } from "./types";

export const tryLogIn = () => dispatch => {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: process.env.REACT_APP_OAUTH_ID,
            scope: 'email'
        })
        .then(() => {
            const authInstance = window.gapi.auth2.getAuthInstance();
            authInstance.signIn()
            .then(response => {
                dispatch({
                    type: SIGN_IN,
                    payload: {userId: authInstance.currentUser.get().getId()}
                })
            })
        });
    });
}

export const tryLogOut = () => dispatch => {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: process.env.REACT_APP_OAUTH_ID,
            scope: 'email'
        })
        .then(() => {
            const authInstance = window.gapi.auth2.getAuthInstance();
            authInstance.signOut()
            .then(response => {
                dispatch({
                    type: SIGN_OUT,
                    payload: false
                })
            })
        });
    });
}

export const updateFormState = (form, formId) => dispatch => {
    debugger;
    dispatch({
        type: UPDATE_FORM_STATE,
        payload: { form, formId }
    })
}