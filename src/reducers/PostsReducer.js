import { assign } from 'lodash/object';
import update from 'immutability-helper';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    // case types.ADD_LIKE:
    //   return assign(
    //     {},
    //     state,
    //     {
    //       entries: update(
    //               items,
    //               // {[index]: {meta: {count: {$apply: function(x) {return x + 1;}}}}}
    //               { [index]: { meta: { count: { $apply(x) { return x + 1; } } } } }
    //             )
    //     }
    //   );
    case types.ADD_LIKE:
      // const { items } = state.entries;
      // const index = items.findIndex(
      //   function(obj) { return obj.id == action.id; }
      // );
      return assign(
        {},
        state,
        {
          entries: update(
            state.entries,
            {
              [action.index]: {
                meta: { count: { $apply(x) { return x + 1; } } }
              }
            }
          )
        }
      );
    default:
      return state;
  }
}
