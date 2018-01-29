import React, { Component } from 'react';
import EventItem from './event.js';
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
					{this.state.content.map((item, index) => {
						debugger
						if(index == 0)
						{
							return(
								<div className="row">
									<div className="col s12">
										<h3 className="header">Next event: {moment(item.properties["startDateTime"]).format('dddd, MMMM D, YYYY')}</h3>
										<h5 className="header light">{moment(item.properties["startDateTime"]).format('HH:mm')} to {moment(item.properties["endDateTime"]).format('HH:mm')}</h5>
									</div>
								</div>
							)							
						}
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