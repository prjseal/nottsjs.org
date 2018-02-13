import React, { Component } from 'react';
import EventItem from './event.js';
import NextEvent from './nextEvent.js';
import { getAccessToken } from '../umbraco-api.js'
import moment from 'moment';

class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: [],
		}
	}

	componentDidMount() {
		getAccessToken().then((token) => {
			this.getEvents(token);
		})
	}

	render() {
		if (this.state) {
			return (
				<div className="col s12 m8 l9 left-align">
					<NextEvent data={this.state.content[0]} />
					{this.state.content.map((item, index) => {
						return (<EventItem data={item} />)
					})}
				</div>
			);
		}
		else {
			return(
				<span>Loading...</span>
			);
		}
	}

	getEvents(token, nodeid) {
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