import React from 'react';
import {Router, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import {setAuth} from './actions/auth';

import routes from './routes';
import store from './store';

// we cache the user details in localStorage, but its still fetched on
// the initial load to update/validate
if (localStorage.auth) {
  store.dispatch(setAuth(localStorage.auth));
}

import hljs from 'highlight.js/lib/highlight';
import diff from 'highlight.js/lib/languages/diff';

hljs.registerLanguage('diff', diff);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
