import React, { Component } from 'react';
import './Content.css';
import Carousel from '../carousel/Carousel'

class Content extends Component {

    render(props) {
        return(
            <Carousel folder={this.props.folder} />
        )
    }
}

export default Content