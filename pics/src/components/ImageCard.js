import React, { Component } from 'react'
import './ImageCard.css'

export default class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0,
            selected: false,
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
        this.setState({selected: !this.state.selected}, () => {
            if (this.state.selected) {
                this.props.addImageToQueue(this.imageRef.current.src);
            } else {
                this.props.removeImageFromQueue(this.imageRef.current.src);
            } 
        });
    }

    render() {
        const { description, urls } = this.props.image
        if (this.state.selected) {
            return (
                <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                    <i className="check circle large icon"></i>
                    <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    onClick={this.downloadImage}
                    />
                </div>
            )
        }
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
