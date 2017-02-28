import React from 'react';
import { Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';

import routes from 'routes';
import store from 'store';
import prepareData from 'helpers/routes/prepareData';

browserHistory.listenBefore(function(location) {
  match({ history, location, routes }, (error, redirect, state) => {
    if (!error &&  !redirect) {
      prepareData(store, state);
    }
  });
});

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

export default App;
