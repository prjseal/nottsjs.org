import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Logo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
              <div className="col s4 offset-s4 m12">
                <img className="logo hoverable responsive-img" src="img/logo.png" alt="NottsJS Logo" />
              </div>
            </div>
        )
    };
}

export default Logo;
