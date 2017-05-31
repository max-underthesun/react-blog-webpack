import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import posts from './PostsReducer';
import post from './PostReducer';
import pagination from './PaginationReducer';

export default combineReducers({
  posts,
  post,
  pagination,
  form: formReducer
});
