import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Loader from './Loader';

export default class App extends React.Component {
    state = {
        loading: false,
    }
    
    onFormSubmit = (payload) => {
        this.setState({loading: true})
        console.log(payload);
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
            </div>
        )
    }
}
