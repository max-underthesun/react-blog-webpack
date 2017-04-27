// import request from 'superagent';

// import { SERVER_URL } from 'constants/ServerUrl';
import { API_CALL } from 'constants/middleware/API';
import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

// const requestPosts = () => ({
//   type: types.FETCH_POSTS_REQUEST
// });
//
// const receivePosts = (response) => ({
//   type: types.FETCH_POSTS_SUCCESS,
//   response
// });
//
// const errorPosts = () => ({
//   type: types.FETCH_POSTS_ERROR
// });
//
// export function fetchPosts() {
//   return (dispatch) => {
//     dispatch(requestPosts());
//
//     return request
//       .get(`${SERVER_URL}/`)
//       .end(
//         (err, response) => {
//           err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
//         }
//       );
//   };
// }

// export function fetchPosts() {
//   return {
//     [API_CALL]: {
//       endpoint: '/',
//       query: {},
//       method: 'GET',
//       types: [
//         types.FETCH_POSTS_REQUEST,
//         types.FETCH_POSTS_SUCCESS,
//         types.FETCH_POSTS_ERROR
//       ]
//     }
//   };
// }

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

// export const addLike = (id) => ({
//   type: types.ADD_LIKE,
//   id
// });

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
