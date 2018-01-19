import React, {Component} from 'react';

class Link extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
            <div>
                <a href={this.props.src}>{this.props.caption}</a>
            </div>
        );
	}
}
				
export default Link;	