import { connect } from 'react-redux';

// import Posts from 'components/views/BlogPage';
// import BlogPageContainer from 'components/containers/BlogPage/BlogPageContainer';
import BlogPage from 'components/views/BlogPage';


const stateToProps = (state) => ({
  items: state.posts.entries,
  // normilized: state.posts.normilized,
  // paginated: state.posts.paginated,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  currentPage: state.posts.currentPage
  // itemsCurrent: state.posts.entries[1]
  // itemsCurrent: state.posts.entries.slice(0, 2)
});

// export default connect(stateToProps)(Posts);
// export default connect(stateToProps)(BlogPageContainer);
export default connect(stateToProps)(BlogPage);
