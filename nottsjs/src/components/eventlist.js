import React, { Component } from 'react';
import EventItem from './event.js';
import {getAccessToken} from '../umbraco-api.js'

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
		getAccessToken('setup@codeshare.co.uk', 'setup@codeshare.co.uk').then((token) => {
			this.getEvents(token);
		})
	}

	render() {
		return (
			<div className="col s12 m8 l9 left-align">
				<div className="row">
				<div className="col s12">
					<h3 className="header">Next event: Tuesday, November 14, 2017</h3>
					<h5 className="header light">18:30 to 21:00</h5>
				</div>
				</div>

				{this.state.content.map((item) => {
					debugger
					return (<EventItem data={item} />)
				})}
			</div>
		);
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