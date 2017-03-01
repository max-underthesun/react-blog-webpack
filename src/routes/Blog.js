import MainLayout from 'components/layouts/MainLayout';
// import BlogPageContainer from 'components/containers/BlogPage/BlogPageContainer';
// import PostContainer from 'components/containers/Post/PostContainer';
import PostsContainer from 'components/containers/PostsContainer';
import PostContainer from 'components/containers/PostContainer';

import AboutContainer from 'components/containers/About/AboutContainer';
import { postsPath, aboutPath } from 'helpers/routes';

import { fetchPosts } from 'actions/PostsAction';
import { fetchPost } from 'actions/PostAction';

const Index = {
  path: '/',
  // component: BlogPageContainer,
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
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
