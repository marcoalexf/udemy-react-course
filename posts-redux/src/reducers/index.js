import { combineReducers } from 'redux';
import postsReducer from './posts.reducer';
import useresReducer from './useres.reducer';

export default combineReducers({
    posts: postsReducer,
    users: useresReducer,
})