import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from 'routes';

const App = () => (
  React.createElement(
    Router,
    { history: browserHistory, routes }
  )
);

export default App;
