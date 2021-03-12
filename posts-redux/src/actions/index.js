import jsonPLaceholder from '../services/jsonPlaceholder';
import * as _ from 'lodash';

export const fetchPosts = () => 
    dispatch => {
        jsonPLaceholder
        .get('/posts')
        .then(({data}) => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: data
            })
        })
    }

const _fetchUser = _.memoize((id, dispatch) =>  {
    jsonPLaceholder
    .get(`/users/${id}`)
        .then(({data}) => {
            return dispatch({
                type: 'FETCH_USER',
                payload: data
            })
        })
})

export const fetchUserMemoized = id => dispatch => _fetchUser(id, dispatch)

const fetchUserNonMemoized = (id, dispatch) =>  {
    jsonPLaceholder
    .get(`/users/${id}`)
        .then(({data}) => {
            return dispatch({
                type: 'FETCH_USER',
                payload: data
            })
        })
}