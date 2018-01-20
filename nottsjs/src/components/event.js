import React, {Component} from 'react';

class EventItem extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
        <div className="row">
          <div className="col s12">
            <div className="card-panel talk">
              <h3 className="header light">{this.props.name}</h3>
            </div>
          </div>
        </div>
        );
	}
}
				
export default EventItem;	