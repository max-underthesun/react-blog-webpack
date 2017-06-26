import PaginationReducer from '../PaginationReducer';
import * as types from 'constants/actionTypes/PaginationActionTypes';

describe('PaginationReducer', () => {
  it('should be able to run tests', () => {
    const initialState  = { currentPage: 1 };
    const newState = PaginationReducer(
      initialState, { type: types.SET_PAGE, currentPage: 2 }
    );
    expect(newState).toEqual({ currentPage: 2 });
  });
});
