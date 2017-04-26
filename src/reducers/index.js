import { combineReducers } from 'redux';

import posts from './PostsReducer';
import post from './PostReducer';
import pagination from './PaginationReducer';

export default combineReducers({
  posts,
  post,
  pagination
});
