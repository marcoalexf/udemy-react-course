import React from 'react'
import './ImagesList.css';
import ImageCard from './ImageCard';

export class ImageList extends React.Component {

    addImageToQueue = src => {
        debugger;
        this.props.setQueue(src);
    }

    removeImageFromQueue = src => {
        this.props.removeFromQueue(src);
    }

    render() {
        const images = this.props.images.map((image) => <ImageCard key={image.id} image={image} className="hoverable" addImageToQueue={this.addImageToQueue} removeImageFromQueue={this.removeImageFromQueue} />)
        return (
            <div className="image-list">
                {images}
            </div>
        )
    }
}

export default ImageList;