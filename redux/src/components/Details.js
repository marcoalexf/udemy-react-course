import React, { Component } from 'react'
import { connect } from 'react-redux'

const Details = ({song}) => {
    return <div>{
        song ? 
        <div>{song.title} - {song.duration}</div>
        : 'Select a song'}</div>
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(Details)
