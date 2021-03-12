import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { tryLogIn, tryLogOut } from '../store/actions/auth.actions';

export const GoogleAuth = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.auth.loggedIn);

    useEffect(() => {
        console.log(loggedIn);
    }, [loggedIn])

    const logIn = () => {
        dispatch(tryLogIn())
    }

    const logout = () => {
        dispatch(tryLogOut())
    }

    return (
        <div>
            {loggedIn 
            ? <button className="ui red google button" onClick={() => logout()}>
                <i className="google icon"></i>
                Sign Out
            </button> 
            : <button 
            className="ui red google button"
            onClick={() => logIn()}>
                <i className="google icon"></i>
                Sign In with Google
            </button>}
        </div>
    )
}