import { combineReducers } from 'redux';

import posts from './PostsReducer';
import post from './PostReducer';

export default combineReducers({
  posts,
  post
});
