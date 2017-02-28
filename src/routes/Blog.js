import MainLayout from 'components/layouts/MainLayout';
import BlogPageContainer from 'components/containers/BlogPage/BlogPageContainer';
import PostContainer from 'components/containers/Post/PostContainer';
import AboutContainer from 'components/containers/About/AboutContainer';
import { postsPath, aboutPath } from 'helpers/routes';

import { fetchPosts } from 'actions/PostsAction';
import { fetchPost } from 'actions/PostAction';

const Index = {
  path: '/',
  component: BlogPageContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts);
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const AboutRoute = {
  path: aboutPath(),
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
