import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { StreamShow, StreamCreate, StreamList, StreamEdit, StreamDelete } from './components/streams';
import { tryLogIn } from './store/actions/auth.actions';

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: process.env.REACT_APP_OAUTH_ID,
          scope: 'email'
      })
      .then(() => {
          const authInstance = window.gapi.auth2.getAuthInstance();
          if(authInstance.isSignedIn.get()) {
            dispatch(tryLogIn())
          }
      });
    });
  }, [dispatch])
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="" exact component={StreamList}/>
          <Route path="/streams/show" component={StreamShow}/>
          <Route path="/streams/new" component={StreamCreate}/>
          <Route path="/streams/edit" component={StreamEdit}/>
          <Route path="/streams/delete" component={StreamDelete}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
