import React, { Component } from 'react';
import EventItem from './event.js';

class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			links: [],
			nodeid: 0,
			content: [],
		}
	}


	componentDidMount() {
		this.getAccessToken('setup@codeshare.co.uk', 'setup@codeshare.co.uk').then((token) => {
			this.getChildren(token);
		})
	}

	render() {
		return (
			<div>
				{this.state.content.map((item) => {
					debugger
					return (<EventItem data={item} />)
				})}
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
		fetch('http://nottsjs.localtest.me/umbraco/rest/v1/content/1073/children', {
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
				content: data._embedded.content,
			});
		});
	}
}

export default EventList;	