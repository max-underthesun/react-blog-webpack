import request from 'superagent';

import { SERVER_URL } from 'constants/ServerUrl';
import * as types from 'constants/actionTypes/PostActionTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${SERVER_URL}/posts/${id}`)
      .end(
        (err, response) => {
          err ? dispatch(errorPost()) : dispatch(receivePost(response.body));
        }
      );
  };
}
