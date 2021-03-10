import React, { Component } from 'react'
import { saveImage } from '../services/UnsplashService';

export default class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        }
        
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        this.setState({spans});
    }

    downloadImage = () => {
        saveImage(this.imageRef.current.src);
    }

    render() {
        const { description, urls } = this.props.image
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef}
                alt={description}
                src={urls.regular}
                onClick={this.downloadImage}
                />
            </div>
        )
    }
}
