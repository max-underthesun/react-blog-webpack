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

const paginatePosts = () => ({
  type: types.PAGINATE_POSTS
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${SERVER_URL}/`)
      .end(
        (err, response) => {
          // err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
          if (err) {
            dispatch(errorPosts());
          }
          else {
            dispatch(receivePosts(response.body));
            dispatch(paginatePosts());
          }
        }
      );
  };
}

export const addLike = (index) => ({
  type: types.ADD_LIKE,
  index
});

export const setPage = (currentPage) => ({
  type: types.SET_PAGE,
  currentPage
});
