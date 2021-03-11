import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Enter Sandman',
            duration: '~3min'
        },
        {
            title: 'Walk',
            duration: '~3min'
        },
        {
            title: 'Sound of Silence',
            duration: '~3min'
        },
        {
            title: 'Psychosocial',
            duration: '~3min'
        },
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === '[SONG] SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})