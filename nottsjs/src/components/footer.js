import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class="section yellow">
				<div class="container">
					<div class="row">
						<div class="col s12 m4">
							<div>
								{renderHTML(String(this.props.data["yellowBlock1"]))}
							</div>
						</div>
						<div class="col s12 m4">
							<div>
								{renderHTML(String(this.props.data["yellowBlock2"]))}
							</div>
						</div>
						<div class="col s12 m4">
							<div>
								{renderHTML(String(this.props.data["yellowBlock3"]))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;	