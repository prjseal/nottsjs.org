import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Sponsors extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row sponsor-images">
              <div className="col s3 offset-s2 m6 offset-m3">
                <a href="https://www.wearejh.com/" target="_blank"><img className="responsive-img" src="img/jhlogo.png" /></a>
              </div>
              <div className="col s5 m8 offset-m2">
                <a href="http://rebelrecruitment.co.uk/" target="_blank"><img className="responsive-img" src="img/rebel-logo.png" /></a>
              </div>
              <div className="col s6 offset-s3 m12">
                <div className="row">
                  <div className="col s12 m8 offset-m2">
                    <a href="https://www.mozilla.org/" target="_blank" className="row"><img className="responsive-img" src="img/mozilla-wordmark.svg" /></a>
                  </div>
                  <div className="col s12">
                    <a className="btn-large waves-effect waves-light modal-trigger red darken-3 scholarship-program-btn" href="#scholarship-fund-modal">Scholarship program</a>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Sponsors;






