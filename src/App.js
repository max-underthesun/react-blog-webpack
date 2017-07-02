import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';

import routes from 'routes';
import createStore from 'store';
import prepareData from 'helpers/routes/prepareData';

import DevTools from 'components/containers/DevToolsContainer';

const store = createStore(window.__INITIAL_STATE__);

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error &&  !redirect) {
      prepareData(store, state);
    }
  });

  return true;
}

browserHistory.listenBefore(historyCb);
historyCb(window.location);

const App = () => (
  React.createElement(
    Provider,
    { store },
    React.createElement(
      Router,
      { history: browserHistory, routes }
    )
  )
);

if (__DEVELOPMENT__) {
  ReactDOM.render(
    React.createElement(
      DevTools,
      { store }
    ),
    document.getElementById('devtools'),
    () => { delete window.__INITIAL_STATE__; }
  );
}

export default App;
