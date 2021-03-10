import React from 'react'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loader from './Loader';
import { getPhoto, saveImage } from '../services/UnsplashService';

export default class App extends React.Component {
    state = {
        loading: false,
        images: [],
        queue: [],
    }
    
    onFormSubmit = (payload) => {
        this.setState({loading: true});
        getPhoto(payload).then(response => {
            this.setState({images: response.data.results || [], loading: false})
        });
    }

    setQueue = src => {
        const queue = [...this.state.queue, src];
        this.setState({queue: [...queue]})
    }

    removeFromQueue = src => {
        const queue = [...this.state.queue.filter(el => el !== src)];
        this.setState({queue: [...queue]})
    }

    downloadImages = () => {
        this.state.queue.forEach(image => {
            saveImage(image);
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <button className="ui button" disabled={this.state.queue.length === 0} onClick={this.downloadImages}> Dowload </button>
                {this.state.loading ? <Loader /> : <ImageList images={this.state.images} setQueue={this.setQueue} removeFromQueue={this.removeFromQueue}/>}
            </div>
        )
    }
}
