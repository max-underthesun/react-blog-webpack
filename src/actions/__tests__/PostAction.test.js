import { fetchPost } from '../PostAction';
import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'constants/middleware/API';

describe('PostAction', () => {
  it('creates expected action', () => {
    const action = {
      [API_CALL]: {
        endpoint: '/posts/1',
        query: { id: 1 },
        method: 'GET',
        types: [
          types.FETCH_POST_REQUEST,
          types.FETCH_POST_SUCCESS,
          types.FETCH_POST_ERROR
        ]
      }
    };

    expect(fetchPost(1)).toEqual(action);
  });
});
