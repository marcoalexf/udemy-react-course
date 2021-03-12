import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMemoized } from '../actions';

const UserHeader = ({userId}) => {
    const user = useSelector(state => state.users.find(user => user.id === userId));
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) {
            dispatch(fetchUserMemoized(userId))
        }
        return () => {
        }
    }, [dispatch])
    return (
        <div>
            {user ? user.name : null}
        </div>
    )
}

export default UserHeader
