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
                    type: '[AUTH] Login',
                    payload: true
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
                    type: '[AUTH] Logout',
                    payload: false
                })
            })
        });
    });
}