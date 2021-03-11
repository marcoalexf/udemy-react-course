import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../actions'

const PostList = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    const renderedPosts = posts.map(el => {
        return (
            <div 
            key={el.id}
            className="item"
            >
                <i className="large middle aligned icon user"></i>
                <div className="content">
                    <div className="description">
                        <h2>{el.title}</h2>
                        <p>{el.body}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="ui relaxed divided list">
            {renderedPosts}
        </div>
    )
}

export default PostList; 