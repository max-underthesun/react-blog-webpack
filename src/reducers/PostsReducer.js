import { assign } from 'lodash/object';
import update from 'immutability-helper';

import * as types from 'constants/actionTypes/PostsActionTypes';
// import { POSTS_PER_PAGE } from 'constants/Pagination';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  normilized: {},
  paginated: {},
  currentPage: '1'
};

function addLike(entries, index) {
  return update(
    entries,
    { [index]: { meta: { count: { $apply(x) { return x + 1; } } } } }
  );
}

// function normilize(items) {
//   const normilized = {};
//   for (let i = 0; i < items.length; i++) {
//     normilized[items[i].id.toString()] = items[i];
//   }
//   return normilized;
// }

// function  paginate(state) {
//   const keys = Object.keys(state.normilized);
//   const paginated = {};
//   let k = 0;
//
//   for (let i = 0; k <= keys.length; i++) {
//     paginated[(i + 1).toString()] = keys.slice(k, k + POSTS_PER_PAGE);
//     k = k + POSTS_PER_PAGE;
//   }
//
//   return paginated;
// }

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign(
        {},
        initialState,
        {
          entries: action.response,
          // normilized: normilize(action.response)
        }
      );
    // case types.PAGINATE_POSTS:
    //   return assign({}, state, { paginated: paginate(state) });
    case types.ADD_LIKE:
      return assign(
        {}, state, { entries: addLike(state.entries, action.index) }
      );
    case types.SET_PAGE:
      return assign({}, state, { currentPage: action.currentPage });
    default:
      return state;
  }
}
