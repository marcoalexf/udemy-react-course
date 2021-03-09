import React from 'react'
import ReactDOM from 'react-dom';

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

    render() {
        debugger;
        if (this.state.loading) {
            return <div>Loading...</div>
        } 
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (this.state.lat) {
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
            )
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
