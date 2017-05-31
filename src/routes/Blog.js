import MainLayout from 'components/layouts/MainLayout';

import {
  PostsContainer,
  PostContainer,
  AboutContainer
} from 'components/containers';

import EditPost from 'components/views/Post/Edit';
import Contacts from 'components/views/Contacts';

import {
  postsPath, aboutPath, contactsPath, postsEditPath, postsNewPath
} from 'helpers/routes';

import { fetchPosts, setPage, fetchPost, clearPost } from 'actions';
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
  component: Contacts
};

const PostEditRoute = {
  path: postsEditPath(),
  component: EditPost,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;

    return store.dispatch(fetchPost(params.id));
  }
};

const PostNewRoute = {
  path: postsNewPath(),
  component: EditPost,
  prepareData: (store) => {
    if (initialLoad()) return;

    return store.dispatch(clearPost());
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute,
    ContactsRoute,
    PostEditRoute,
    PostNewRoute
  ]
};
