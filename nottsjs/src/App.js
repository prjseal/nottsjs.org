import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer.js';
import EventList from './components/eventlist.js';
import renderHTML from 'react-render-html';
import Instructions from './components/instructions.js';
import Popup from './components/popup.js';
import Logo from './components/logo.js';
import Sponsors from './components/sponsors.js';
import Address from './components/address.js';
import {getAccessToken} from './umbraco-api.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: [],
      sponsors: [],
    }
  }

  componentDidMount() {
    getAccessToken('setup@codeshare.co.uk', 'setup@codeshare.co.uk')
    .then((token) => {
      this.getHomeContent(token);
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l3 center-align">
              <Logo />
              <Address data={this.state.content} />
              <Sponsors data={this.state.sponsors} />
              <p className="light">Would you like to sponsor us? <a class="black-text" href="mailto:contact@nottsjs.org">contact@nottsjs.org</a></p>
            </div>
            <EventList />
          </div>
          {renderHTML(String(this.state.content["codeOfConductMessage"]))}
        </div>
        <Instructions data={this.state.content} />
        <Footer data={this.state.content} />
        <Popup data={this.state.content} />
      </div>
    );
  }

  getHomeContent(token) {
    fetch('http://nottsjs.localtest.me/umbraco/rest/v1/content', {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      debugger
      this.setState({
        content: data._embedded.content["0"].properties,
        sponsors: JSON.parse(data._embedded.content["0"].properties.sponsors),
      });
    });
  }
}

export default App;
