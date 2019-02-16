import React, { Component } from 'react';
import './Picture.css';
import { CSSTransitionGroup } from 'react-transition-group'


class Picture extends Component {

    returnPicture = (folder, index) => {
        let pictureKey, pictureAlt = folder.name + '_' + index
        let pictureUrl =  '/img/' + folder.name + '/' + folder.picturePrefix + index + '.jpg'

        return (
            <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={3000}
            transitionLeave={false}>
          <div className="Picture-container" key={index}>
                    <img key={pictureKey}  alt={pictureAlt} src={pictureUrl}></img>
                </div>
        </CSSTransitionGroup>
            
        )
    }

    render(props) {
        return (
            this.returnPicture(this.props.folder, this.props.index)
        );
    }
};
 
export default Picture
 