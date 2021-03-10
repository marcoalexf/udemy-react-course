import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        searchQuery: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchQuery)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Input text"
                        value = {this.state.searchQuery}
                        onChange={(e) => this.setState({searchQuery: e.target.value})}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}
