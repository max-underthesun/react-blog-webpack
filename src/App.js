import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from 'routes';
// import MainLayout from 'components/layouts/MainLayout';
// import BlogPage from 'components/BlogPage';

// import MainLayout from 'components/layouts/MainLayout';
// import BlogPage from 'components/BlogPage';
// import Post from 'components/Post';
// import { postsPath } from 'helpers/routes';
// const Index = {
//   path: '/',
//   component: BlogPage
// };
//
// const PostRoute = {
//   // path: '/posts/:id',
//   path: postsPath(),
//   component: Post
// };
//
// const routes = {
//   component: MainLayout,
//   childRoutes: [
//     Index,
//     PostRoute
//   ]
// };

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
