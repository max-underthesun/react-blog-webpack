import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from 'routes';
// import MainLayout from 'components/layouts/MainLayout';
// import BlogPage from 'components/BlogPage';

const App = () => (
  // React.createElement(
  //   MainLayout,
  //   {},
  //   React.createElement(BlogPage)
  // )
  React.createElement(
    Router,
    { history: browserHistory, routes }
  )
);

export default App;
