import MainLayout from 'components/layouts/MainLayout';
// import PostsContainer from 'components/containers/PostsContainer';
// import PostContainer from 'components/containers/PostContainer';
// import AboutContainer from 'components/containers/AboutContainer';
// import ContactsContainer from 'components/containers/ContactsContainer';
// import PostEditContainer from 'components/containers/PostEditContainer';
import {
  PostsContainer,
  PostContainer,
  AboutContainer,
  ContactsContainer
  // , PostEditContainer
} from 'components/containers';

import EditPost from 'components/views/Post/Edit';
import { postsPath, aboutPath, contactsPath } from 'helpers/routes';
// import { fetchPosts } from 'actions/PostsAction';
// import { setPage } from 'actions/PaginationAction';
// import { fetchPost } from 'actions/PostAction';
import { fetchPosts, setPage, fetchPost } from 'actions';
import { blank } from 'helpers/presence';
import initialLoad from 'helpers/initialLoad';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store, query) => {
    if (initialLoad()) return;

    const posts = store.getState().posts.entries;
    if (blank(posts) || posts.length === 0) {
      return store.dispatch(fetchPosts());
    }
    else if (posts.length !== 0 && !query.page) {
      return store.dispatch(setPage('1'));
    }
    else if (posts.length !== 0 && query.page) {
      return store.dispatch(setPage(query.page));
    }
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;

    return store.dispatch(fetchPost(params.id));
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: AboutContainer
};

const ContactsRoute = {
  path: contactsPath(),
  component: ContactsContainer
};

const PostEditRoute = {
  path: `${postsPath()}/edit`,
  // component: PostEditContainer,
  component: EditPost,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;

    return store.dispatch(fetchPost(params.id));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute,
    ContactsRoute,
    PostEditRoute
  ]
};
