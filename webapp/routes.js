import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

import requireAuth from './utils/requireAuth';

// <Route path="/" component={requireAuth(App)} />;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuth(Dashboard)} />
    <Route path="/login" component={Login} />
  </Route>
);