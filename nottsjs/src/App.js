import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js';

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
      <div>
        <Home data={this.state.content} />
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
