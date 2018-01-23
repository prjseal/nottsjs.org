import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Address extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
              <div className="col s10 offset-s1">
                <a className="black-text" href="https://goo.gl/maps/CANG94ZcpaL2">
                  <address>
                    <i className="material-icons valign-middle">place</i>34a Stoney Street,<br />Nottingham,<br />NG1 1NB
                    </address>
                </a>
              </div>
            </div>
        )
    };
}

export default Address;