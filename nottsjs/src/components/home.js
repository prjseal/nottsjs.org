import React, { Component } from 'react';
import EventList from './eventlist.js';

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
		return (
			<div>
				<EventList />
			</div>
		);
	}
}

export default Home;	