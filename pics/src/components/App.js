import React from 'react'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Loader from './Loader';
import { getPhoto } from '../services/UnsplashService';

export default class App extends React.Component {
    state = {
        loading: false,
        images: []
    }
    
    onFormSubmit = (payload) => {
        this.setState({loading: true});
        getPhoto(payload).then(response => {
            this.setState({images: response.data.results || [], loading: false})
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <SearchBar onFormSubmit={this.onFormSubmit} />
                    <Loader />
                </div>
            )
        }
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
