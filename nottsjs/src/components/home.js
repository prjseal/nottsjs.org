import React, { Component } from 'react';
import EventItem from './event.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			links: [],
			nodeid: 0,
			chidren: [],
		}
	}

	render() {
		debugger
		return (
			
			<div>
				{this.props.content.name}
				<EventItem parentid={this.props.nodeid} name={'Event Name'} />
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

	getChildren(token, nodeid) {
		fetch('http://nottsjs.localtest.me/umbraco/rest/v1/content/'+ this.props.nodeid + '/children', {
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
				name: data._embedded.content["0"].name,
				links: data._links,
				nodeid: data._embedded.content["0"].id,
			});
		});
	}
}

export default Home;	