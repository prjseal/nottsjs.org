import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Sponsors extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      if(this.props.data)
        {
          return (
              <div className="row sponsor-images">
                  {this.props.data.map((item) => {
                    return (
                    <div className="col s6 offset-s3 m10 offset-m1">
                      {/* {item} */}
                      <a href={item["sponsorUrl"]} target="_blank"><img className="responsive-img" src={item["sponsorLogoUrl"]} alt={item["sponsorName"] + ' logo'} /></a>
                    </div>
                    );
                  })}
                  <div class="col s12">
                    <a class="btn-large waves-effect waves-light modal-trigger red darken-3 scholarship-program-btn" href="#scholarship-fund-modal">Scholarship program</a>
                  </div>
              </div>
          );
        }
        else
          {
            return (
            <span>Loading...</span>
            );
          }
    }
}

export default Sponsors;






