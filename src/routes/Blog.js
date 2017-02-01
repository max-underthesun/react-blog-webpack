import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/BlogPage';
import Post from 'components/Post';
import About from 'components/About';
import { postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  // path: '/posts/:id',
  path: postsPath(),
  component: Post
};

const AboutRoute = {
  path: '/about',
  component: About
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
