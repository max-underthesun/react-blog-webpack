import { assign } from 'lodash/object';
import update from 'immutability-helper';

import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';
import present from 'helpers/presence';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

function addLike(entry, id, count) {
  if (present(entry) && entry.meta.id == id) {
    return update(entry, { meta: { count: { $apply() { return count; } } } });
  } else {
    return entry;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case likeTypes.POST_LIKE_SUCCESS: {
      const id = action.response.id;
      const count = action.response.count;
      return assign({}, state, { entry: addLike(state.entry, id, count) });
    }
    default:
      return state;
  }
}
