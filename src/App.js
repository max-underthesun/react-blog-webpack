import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from 'routes';
import store from 'store';

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
