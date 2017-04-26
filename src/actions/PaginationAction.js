import * as types from 'constants/actionTypes/PaginationActionTypes';

export const setPage = (currentPage) => ({
  type: types.SET_PAGE,
  currentPage
});
