import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Popup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.data["popupContent"]) {
            return (
                <div id="scholarship-fund-modal" className="modal">
                    <div className="modal-content">
                        {renderHTML(this.props.data["popupContent"])}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                        <a href="mailto:contact@nottsjs.org" className="modal-action waves-effect waves-green btn-flat">Talk at NottsJS</a>
                    </div>
                </div>
            );
        }
        else {
            return (<span>Loading...</span>);
        }
    }
}

export default Popup;


