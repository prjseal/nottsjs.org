import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// import EventList from './eventlist.js';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		debugger
		return (
        <footer class=" blue-grey darken-2">
          <div class="container">
            <div class="row last">
              <div class="col s12">
                <br />
                <p class="grey-text text-lighten-4 center">
                  {String(this.props.data["meetupDescription"])}
                </p>
                <br />
              </div>
              <div class="col s6 m4 offset-m3">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="white-text" href="/cdn-cgi/l/email-protection#2c4f4342584d4f586c424358585f465f02435e4b135f594e46494f5811624358585f667f076f4342584d4f58">Contact</a></li>
                  <li><a class="white-text" href="//eepurl.com/bvVtwb">Newsletter</a></li>
                  <li><a class="white-text" href="//github.com/nottsjs/speakers">Submit a Talk</a></li>
                  <li><a class="white-text" href="codeofconduct.html">Code of Conduct</a></li>
                </ul>
              </div>
              <div class="col s6 m4">
                <h5 class="white-text">Connect</h5>
                <ul>
                  <li>
                    <a class="white-text" href="https://twitter.com/nottsjs">
                      <svg class="logo-small" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                        />
                      </svg> nottsjs</a>
                  </li>
                  <li>
                    <a class="white-text" href="https://github.com/nottsjs">
                      <svg class="logo-small" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                        />
                      </svg> nottsjs</a>
                  </li>
                  <li>
                    <a class="white-text" href="https://gitter.im/nottsjs/discuss">
                      <svg class="logo-small" viewBox="0 0 24 24">
                        <line stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="6.625" y1="1.75" x2="6.625" y2="14.469" />
                        <line fill="none" x1="10.5" y1="5.938" x2="10.5" y2="21.188" />
                        <line fill="none" x1="14.438" y1="5.938" x2="14.438" y2="21" />
                        <line fill="none" x1="18.375" y1="5.938" x2="18.375" y2="13.469" />
                        <line stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="10.625" y1="4.75" x2="10.625" y2="21.5" />
                        <line stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="14.625" y1="4.75" x2="14.625" y2="21.5" />
                        <line stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="18.625" y1="4.75" x2="18.625" y2="14.469" />
                      </svg> nottsjs/discuss
							</a>
                  </li>
                  <li>
                    <a class="white-text" href="https://github.com/nottsjs/feedback">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                        />
                      </svg> Feedback
							</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
		);
	}
}

export default Footer;	