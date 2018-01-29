import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SVGLink from './svglink.js';

class EventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card-panel talk">
            <h3 class="header light">{this.props.data.name}</h3>
            <p>{moment(this.props.data.properties["startDateTime"]).format('dddd, MMMM Do YYYY, H:mm')}</p>
            {/* <h6 class="light">{this.formatDate(new Date('2017-11-14T18:30:00Z'))}</h6> */}
            <a class="btn waves-effect waves-light yellow black-text top-button" href={this.props.data.properties["meetupUrl"]}>RSVP on Meetup<i class="material-icons left">reply</i></a>
              <a class="btn waves-effect waves-light yellow black-text top-button" href={'https://calendar.google.com/calendar/r/eventedit?text=NottsJS+November+2017&dates=' + moment(this.props.data.properties["startDateTime"]).format('YYYYMMDDTHHmm00') + 'Z/' + moment(this.props.data.properties["endDateTime"]).format('YYYYMMDDTHHmm00') + 'Z&location=JH,+34a+Stoney+Street,+Nottingham,+NG1+1NB&sf=true&output=xml'}>Add to Google Calendar<i class="material-icons left">date_range</i></a>
            {renderHTML(this.props.data.properties["meetingContent"].replace("/media", "http://nottsjs.localtest.me/media"))}
            <hr/>
              <div class="row profile">   
                <div class="col s12 m4 l3">
                  <div class="row">
                    <div class="col s8 offset-s2">
                      <div class="avatar">
                        <img src={'http://nottsjs.localtest.me' + this.props.data.properties["speakerImage"]} alt={this.props.data.properties["speakerName"]} class="circle responsive-img" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col s12 center-align">
                      <SVGLink url={this.props.data.properties["gitHubUrl"]} type={'github'} />
                      <SVGLink url={this.props.data.properties["twitterUrl"]} type={'twitter'} />
                      <SVGLink url={this.props.data.properties["websiteUrl"]} type={'website'} />
                    </div>
                  </div>
                </div>
                <div class="col s12 m8 l9">
                  <h5 class="title">{this.props.data.properties["speakerName"]}</h5>
                  {renderHTML(this.props.data.properties["bio"])}
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }

  formatDate(dateTime)
  {
    return dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getYear();
  }
}

export default EventItem;	