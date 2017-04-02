import { assign } from 'lodash/object';
import update from 'immutability-helper';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function addLike(entries, index) {
  return update(
    entries,
    { [index]: { meta: { count: { $apply(x) { return x + 1; } } } } }
  );
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case types.ADD_LIKE:
      return assign(
        {}, state, { entries: addLike(state.entries, action.index) }
      );
    default:
      return state;
  }
}
