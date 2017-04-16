import { connect } from 'react-redux';

import { POSTS_PER_PAGE } from 'constants/Pagination';
import BlogPage from 'components/views/BlogPage';

function paginate(items) {
  let k = 0;
  const paginated = {};

  for (let i = 0; k <= items.length; i++) {
    paginated[(i + 1).toString()] = items.slice(k, k + POSTS_PER_PAGE);
    k = k + POSTS_PER_PAGE;
  }

  return paginated;
}


const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  itemsPaginated: paginate(state.posts.entries),
  currentPage: state.posts.currentPage
});

export default connect(stateToProps)(BlogPage);
