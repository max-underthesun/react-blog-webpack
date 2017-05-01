import MainLayout from 'components/layouts/MainLayout';
import PostsContainer from 'components/containers/PostsContainer';
import PostContainer from 'components/containers/PostContainer';
import AboutContainer from 'components/containers/AboutContainer';
import { postsPath, aboutPath } from 'helpers/routes';
import { fetchPosts } from 'actions/PostsAction';
import { setPage } from 'actions/PaginationAction';
import { fetchPost } from 'actions/PostAction';
import { blank } from 'helpers/presence';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store, query) => {
    const posts = store.getState().posts.entries;
    // if (typeof posts == 'undefined' || posts.length === 0) {
    if (blank(posts) || posts.length === 0) {
      store.dispatch(fetchPosts());
    }
    else if (posts.length !== 0 && !query.page) {
      store.dispatch(setPage('1'));
    }
    else if (posts.length !== 0 && query.page) {
      store.dispatch(setPage(query.page));
    }
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
