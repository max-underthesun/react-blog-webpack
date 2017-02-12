import MainLayout from 'components/layouts/MainLayout';
import BlogPageContainer from 'components/containers/BlogPage/BlogPageContainer';
import PostContainer from 'components/containers/Post/PostContainer';
import AboutContainer from 'components/containers/About/AboutContainer';
import { postsPath, aboutPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPageContainer
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer
};

const AboutRoute = {
  path: aboutPath(),
  // path: '/about',
  component: AboutContainer
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
