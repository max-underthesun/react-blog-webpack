import { connect } from 'react-redux';

import BlogPage from 'components/views/BlogPage';


const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  currentPage: state.posts.currentPage
});

export default connect(stateToProps)(BlogPage);
