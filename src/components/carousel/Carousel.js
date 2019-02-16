import React, { Component } from 'react';
import './Carousel.css';


class Carousel extends Component {

    constructor() {
        super();
        this.state = {index: 1};
      }
    
    returnPicture = (folder, index) => {
        let pictureKey, pictureAlt = folder.name + '_' + index
        let pictureUrl =  '/img/' + folder.name + '/' + folder.picturePrefix + index + '.jpg'

        return (
            <div className="Picture-container" onClick={ this.loadNextPicture}>
                <img key={pictureKey}  alt={pictureAlt} src={pictureUrl}></img>
            </div>
        )
    }

    returnControls = () => {
        return (
            <div className="Carousel-controls">
                <div onClick={ this.loadPreviousPicture}><i className="fas fa-arrow-left"></i></div>
                <div className="Controls-position">{this.state.index} / {this.props.folder.size}</div>
                <div onClick={ this.loadNextPicture}><i className="fas fa-arrow-right"></i></div>
            </div>
        )
    }
        
    loadNextPicture = () => {
        this.state.index === this.props.folder.size ? this.setState( {index: 1}) : this.setState( {index: this.state.index + 1});
    }

    loadPreviousPicture = () => {
        this.state.index === 1 ? this.setState( {index: this.props.folder.size}) : this.setState( {index: this.state.index - 1});
    }

    render() {
        return (
            <div>
                {this.returnPicture(this.props.folder, this.state.index)}
                {this.returnControls()}
            </div>
        );
    }
};
 
export default Carousel
 