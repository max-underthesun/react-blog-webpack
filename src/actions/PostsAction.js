import request from 'superagent';

import { SERVER_URL } from 'constants/ServerUrl';
import * as types from 'constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${SERVER_URL}/`)
      .end(
        (err, response) => {
          err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
        }
      );
  };
}

export const addLike = (id) => ({
  type: types.ADD_LIKE,
  id
});

export const setPage = (currentPage) => ({
  type: types.SET_PAGE,
  currentPage
});
