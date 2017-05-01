import { API_CALL } from 'constants/middleware/API';
import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

export const fetchPosts = () => ({
  [API_CALL]: {
    endpoint: '/',
    query: {},
    method: 'GET',
    types: [
      types.FETCH_POSTS_REQUEST,
      types.FETCH_POSTS_SUCCESS,
      types.FETCH_POSTS_ERROR
    ]
  }
});

export const addLike = (id) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}/like`,
    query: {},
    method: 'POST',
    types: [
      likeTypes.POST_LIKE_REQUEST,
      likeTypes.POST_LIKE_SUCCESS,
      likeTypes.POST_LIKE_ERROR
    ]
  }
});
