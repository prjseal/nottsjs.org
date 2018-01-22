import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EventList from './components/eventlist.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EventList />, document.getElementById('events'));
ReactDOM.render(<App />, document.getElementById('homecontent'));

registerServiceWorker();
