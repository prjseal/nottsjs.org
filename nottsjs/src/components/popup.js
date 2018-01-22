import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Popup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="scholarship-fund-modal" className="modal">
                <div className="modal-content">
                    <h4>Mozilla scholarship fund</h4>
                    <p>
                        Mozilla is committed to building an open web community where everyone can participate.
    </p>
                    <p>
                        The scholarship fund is Mozilla&apos;s way of helping us fund travel for participants from under represented groups to speak
        at the event.
    </p>
                    <p>
                        If you want to speak at our events but feel you need help getting here <a href="/cdn-cgi/l/email-protection#caa9a5a4beaba9be8aa4a5bebeb9a0b9e4a5b8adf599bfa8a0afa9bef799a9a2a5a6abb8b9a2a3bae1beaba6a1">send us an email</a>.
    </p>

                    <p>
                        As a reminder we have a <a href="/codeofconduct.html">CoC</a> at the event and we take it seriously. We also follow
        <a href="https://www.mozilla.org/en-US/about/governance/policies/participation/">Mozilla&apos;s participation guidelines</a>        and if you feel more comfortable you can email them with any issue that arises at the event.
    </p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    <a href="/cdn-cgi/l/email-protection#c8aba7a6bca9abbc88a6a7bcbcbba2bbe6a7baaff79bbdaaa2adabbcf59baba0a7a4a9babba0a1b8e3bca9a4a3" className="modal-action waves-effect waves-green btn-flat">Talk at NottsJS</a>
                </div>
            </div>
        );
    }
}

export default Popup;


