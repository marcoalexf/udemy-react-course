import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions';

const SongList = ({songs, selectSong}) => {
    
    const renderedItems = songs.map(el => {
        return (
            <li key={el.title}>
                {el.title}
                <button onClick={() => selectSong(el)}>Select</button>
                </li>
        )
    })
    return (
        <div>
            {renderedItems}
        </div>
    ) 
    
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {
    selectSong
})(SongList);