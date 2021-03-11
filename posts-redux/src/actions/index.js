import jsonPLaceholder from '../services/jsonPlaceholder';

export const fetchPosts = () => 
    dispatch => {
        jsonPLaceholder.get('/posts')
        .then(({data}) => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: data
            })
        })
    }


export const fetchUser = (id) => dispatch => {
    jsonPLaceholder.get(`/user/${id}}`)
        .then(({data}) => {
            return dispatch({
                type: 'FETCH_USER',
                payload: data
            })
        })
}