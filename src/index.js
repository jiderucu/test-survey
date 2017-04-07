import React from 'react';
import {
    render
} from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';
// import HomePage from './containers/HomePage';
// import MyActivity from './containers/MyActivity';
// import App from './containers/App';

import route from './route';

render(
    route,
    document.getElementById('root')
);