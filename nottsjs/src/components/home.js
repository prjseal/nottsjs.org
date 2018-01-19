import React, {Component} from 'react';
import EventItem from './event.js';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
                <span>{this.props.name}</span>
				<EventItem />
            </div>
        );
	}
}
				
export default Home;	