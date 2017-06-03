import PaginationReducer from '../PaginationReducer';

describe('PaginationReducer', () => {
  it('should be able to run tests', () => {
    const initialState  = { currentPage: 1 };
    const newState = PaginationReducer(
      initialState, { type: 'SET_PAGE', currentPage: 2 }
    );
    expect(newState).toEqual({ currentPage: 2 });
  });
});
