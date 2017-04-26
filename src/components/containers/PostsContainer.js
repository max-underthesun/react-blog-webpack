import { connect } from 'react-redux';
import { range } from 'lodash';

import BlogPage from 'components/views/BlogPage';

function currentItems(items, currentPage, postsPerPage) {
  const from = postsPerPage * (currentPage - 1);
  const to = postsPerPage * currentPage;
  return items.slice(from, to);
}

function numberOfPages(items, postsPerPage) {
  const maxNumber = Math.ceil(items.length / postsPerPage) + 1;
  return range(1, maxNumber).map((x) => x.toString());
}

function stateToProps(state) {
  const items = state.posts.entries;
  const postsPerPage = state.pagination.postsPerPage;
  const currentPage = state.pagination.currentPage;
  const itemsCurrent = currentItems(items, currentPage, postsPerPage);
  const pageNumbers = numberOfPages(items, postsPerPage);

  return {
    items: state.posts.entries,
    isFetching: state.posts.isFetching,
    error: state.posts.error,
    currentPage,
    pageNumbers,
    itemsCurrent
  };
}

export default connect(stateToProps)(BlogPage);
