import { assign } from 'lodash/object';

import { POSTS_PER_PAGE } from 'constants/Pagination';
import * as types from 'constants/actionTypes/PaginationActionTypes';

const initialState = {
  currentPage: '1',
  postsPerPage: POSTS_PER_PAGE
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_PAGE:
      return assign({}, state, { currentPage: action.currentPage });
    default:
      return state;
  }
}
