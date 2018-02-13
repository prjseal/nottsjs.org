import React, { Component } from 'react';
import moment from 'moment';

class NextEvent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.data) {
			return (
				<div className="row">
					<div className="col s12">
						<h3 className="header">Next event: {moment(this.props.data.properties["startDateTime"]).format('dddd, MMMM D, YYYY')}</h3>
						<h5 className="header light">{moment(this.props.data.properties["startDateTime"]).format('HH:mm')} to {moment(this.props.data.properties["endDateTime"]).format('HH:mm')}</h5>
					</div>
				</div>
			);
		}
		else {
			return(
				<span>Loading...</span>
			);
		}
	}
}

export default NextEvent;	