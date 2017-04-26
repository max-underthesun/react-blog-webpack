import { API_CALL } from 'constants/middleware/API';
import * as types from 'constants/actionTypes/PostActionTypes';

export const fetchPost = (id) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}`,
    query: {},
    method: 'GET',
    types: [
      types.FETCH_POST_REQUEST,
      types.FETCH_POST_SUCCESS,
      types.FETCH_POST_ERROR
    ]
  }
});

// export const addLike = (id) => ({
//   type: types.ADD_LIKE,
//   id
// });


// import request from 'superagent';
//
// import { SERVER_URL } from 'constants/ServerUrl';
// import * as types from 'constants/actionTypes/PostActionTypes';
//
// const requestPost = (id) => ({
//   type: types.FETCH_POST_REQUEST,
//   id
// });
//
// const errorPost = () => ({
//   type: types.FETCH_POST_ERROR
// });
//
// const receivePost = (response) => ({
//   type: types.FETCH_POST_SUCCESS,
//   response
// });
//
// export function fetchPost(id) {
//   return (dispatch) => {
//     dispatch(requestPost(id));
//
//     return request
//       .get(`${SERVER_URL}/posts/${id}`)
//       .end(
//         (err, response) => {
//           err ? dispatch(errorPost()) : dispatch(receivePost(response.body));
//         }
//       );
//   };
// }
