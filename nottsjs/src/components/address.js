import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Address extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.data["address"]) {
            return (
                <div className="row">
                    <div className="col s10 offset-s1">
                        <a className="black-text" href="https://goo.gl/maps/CANG94ZcpaL2">
                            <address>
                                <i className="material-icons valign-middle">place</i>{renderHTML(this.props.data["address"].replace("<p>", "").replace("</p>", ""))}
                            </address>
                        </a>
                    </div>
                </div>
            )
        }
        else {
            return (
                <span>Loading...</span>
            );
        }
    };
}

export default Address;