import React, { useEffect, useState } from 'react'

export const GoogleAuth = () => {
    const [loggedIn, setLoggedIn] = useState(null);
    const [authInstance, setAuthInstance] = useState(null);
    useEffect(() => {
        console.log(process.env.REACT_APP_OAUTH_ID);
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_OAUTH_ID,
                scope: 'email'
            })
            .then(() => {
                debugger;
                const authInstance = window.gapi.auth2.getAuthInstance();
                setAuthInstance(authInstance);
                setLoggedIn(authInstance.isSignedIn.get());
            });
        });

        return () => {
        }
    }, [])

    useEffect(() => {
        debugger;
        if (authInstance) {
            if (!loggedIn) {
                authInstance.signIn()
                .then((response) => {
                    debugger;
                    setLoggedIn(true);
                })
            }
        }
        return () => {
        }
    }, [loggedIn])

    const logIn = () => {
        authInstance.signIn()
        .then((response) => {
            console.log(response);
            //setLoggedIn(true)
        });
    }

    return (
        <div>
            {loggedIn ? 'Logged In!' : <button onClick={() => logIn()}>Login</button>}
        </div>
    )
}