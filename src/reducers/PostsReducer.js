import { assign } from 'lodash/object';
import update from 'immutability-helper';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function findIndex(items, id) {
  return items.findIndex(function(obj) { return obj.id == id; });
}

function addLike(entries, id, count) {
  const index = findIndex(entries, id);
  return update(
    entries,
    { [index]: { meta: { count: { $apply() { return count; } } } } }
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
    case likeTypes.POST_LIKE_SUCCESS: {
      const id = action.response.id;
      const count = action.response.count;
      return assign({}, state, { entries: addLike(state.entries, id, count) });
    }
    default:
      return state;
  }
}
