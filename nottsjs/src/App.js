import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js';
import EventList from './components/eventlist.js';
import renderHTML from 'react-render-html';
import Footer from './components/footer.js';
import Popup from './components/popup.js';
import Sponsors from './components/sponsors.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: [],
    }
  }

  componentDidMount() {
    this.getAccessToken('setup@codeshare.co.uk', 'setup@codeshare.co.uk').then((token) => {
      this.getHomeContent(token);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3 center-align">
            <div className="row">
              <div className="col s4 offset-s4 m12">
                <img className="logo hoverable responsive-img" src="img/logo.png" alt="NottsJS Logo" />
              </div>
            </div>
            <div className="row">
              <div className="col s10 offset-s1">
                <a className="black-text" href="https://goo.gl/maps/CANG94ZcpaL2">
                  <address>
                    <i className="material-icons valign-middle">place</i>34a Stoney Street,<br />Nottingham,<br />NG1 1NB
                    </address>
                </a>
              </div>
            </div>

            <Sponsors data={this.state.content} />

            <p className="light">Would you like to sponsor us? <a className="black-text" href="/cdn-cgi/l/email-protection#d0b3bfbea4b1b3a490bebfa4a4a3baa3febfa2b7"><span className="__cf_email__" data-cfemail="9ffcf0f1ebfefcebdff1f0ebebecf5ecb1f0edf8">[email&#160;protected]</span></a></p>

          </div>

          <div className="col s12 m8 l9 left-align">

            <div className="row">
              <div className="col s12">
                <h3 className="header">Next event: Tuesday, November 14, 2017</h3>
                <h5 className="header light">18:30 to 21:00</h5>
              </div>
            </div>

            <EventList />
          </div>
        </div>
        {renderHTML(String(this.state.content["codeOfConductMessage"]))}
        <Home data={this.state.content} />

        <Footer data={this.state.content} />


        <Popup />
      </div>
    );
  }

  getAccessToken(username, password) {
    const postData = {
      grant_type: 'password',
      username,
      password,
    };

    const authUrl = 'http://nottsjs.localtest.me/umbraco/oauth/token';

    return new Promise((resolve, reject) => {
      return fetch(authUrl, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: this.encodePostData(postData),
      }).then((response) => {
        return response.json();
      })
        .then((data) => {
          return resolve(data.access_token);
        });
    });
  }

  encodePostData(postData) {
    if (!postData) throw new Error('No post data present.');
    return Object.keys(postData).map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(postData[key])}`;
    }).join('&');
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
