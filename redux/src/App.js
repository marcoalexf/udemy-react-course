import React from 'react'
import { selectSong } from './actions';
import Details from './components/Details';
import SongList  from './components/SongList';

const App = () => {
    return (
        <div>
            <SongList />
            <Details />
        </div>
    )
}

export default App;