import { connect } from 'react-redux';
import { range } from 'lodash';

// import { POSTS_PER_PAGE } from 'constants/Pagination';
import BlogPage from 'components/views/BlogPage';

// function paginate(items) {
//   let k = 0;
//   const paginated = {};
//
//   for (let i = 0; k <= items.length; i++) {
//     paginated[(i + 1).toString()] = items.slice(k, k + POSTS_PER_PAGE);
//     k = k + POSTS_PER_PAGE;
//   }
//
//   return paginated;
// }

function currentItems(items, currentPage, postsPerPage) {
  const from = postsPerPage * (currentPage - 1);
  const to = postsPerPage * currentPage;
  // aa.slice((pp * (cp - 1)), pp * cp)
  return items.slice(from, to);
}

function stateToProps(state) {
  // const itemsPaginated = paginate(state.posts.entries);
  const items = state.posts.entries;
  // const postsPerPage = state.posts.pagination.postsPerPage;
  const postsPerPage = state.pagination.postsPerPage;
  // const currentPage = state.posts.currentPage;
  // const currentPage = state.posts.pagination.currentPage;
  const currentPage = state.pagination.currentPage;
  // const itemsCurrent = itemsPaginated[currentPage];
  const itemsCurrent = currentItems(items, currentPage, postsPerPage);
  // const pageNumbers = Object.keys(itemsPaginated);
  const pageNumbers = range(
    1, Math.ceil(items.length / postsPerPage) + 1
  ).map((x) => x.toString());

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
