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
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3 center-align">
            <Logo />
            <Address data={this.state.content} />
            <Sponsors data={this.state.content} />
            <p className="light">Would you like to sponsor us? <a className="black-text" href="/cdn-cgi/l/email-protection#d0b3bfbea4b1b3a490bebfa4a4a3baa3febfa2b7"><span className="__cf_email__" data-cfemail="9ffcf0f1ebfefcebdff1f0ebebecf5ecb1f0edf8">[email&#160;protected]</span></a></p>
          </div>
          <EventList />
        </div>
        {renderHTML(String(this.state.content["codeOfConductMessage"]))}
        <Instructions data={this.state.content} />
        <Footer data={this.state.content} />
        <Popup />
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
      this.setState({
        content: data._embedded.content["0"].properties,
      });
    });
  }
}

export default App;
