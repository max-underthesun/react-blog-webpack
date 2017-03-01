import { connect } from 'react-redux';

import Posts from 'components/views/BlogPage';
// import BlogPageContainer from 'components/containers/BlogPage/BlogPageContainer';


const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(Posts);
// export default connect(stateToProps)(BlogPageContainer);
