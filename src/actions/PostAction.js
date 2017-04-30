import { API_CALL } from 'constants/middleware/API';
import * as types from 'constants/actionTypes/PostActionTypes';

export const fetchPost = (id) => ({
  [API_CALL]: {
    endpoint: `/posts/${id}`,
    query: { id },
    method: 'GET',
    types: [
      types.FETCH_POST_REQUEST,
      types.FETCH_POST_SUCCESS,
      types.FETCH_POST_ERROR
    ]
  }
});
