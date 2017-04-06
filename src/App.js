import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';

import routes from 'routes';
import store from 'store';
import prepareData from 'helpers/routes/prepareData';

import DevTools from 'components/containers/DevToolsContainer';

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

ReactDOM.render(
  React.createElement(
    DevTools,
    { store }
  ),
  document.getElementById('devtools')
);

export default App;
