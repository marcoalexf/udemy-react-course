import React from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export class App extends React.Component {
    state = {
        lat: null,
        errorMessage: '',
        loading: true,
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude,loading: false,}),
            err => this.setState({errorMessage: err.message, loading: false})
        )
    }

    renderContent() {
        if (this.state.loading) {
            return <div><Spinner message="Please accept location request" /></div>
        } 
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            )
        }
    }

    render() {
        return (
            <div className="border red">
            {this.renderContent()}
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
