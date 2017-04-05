import React, { PropTypes } from 'react';
import { map } from 'lodash';
import { Grid } from 'semantic-ui-react';

import BlogItem from 'components/shared/widgets/BlogItem';
import Pagination from 'components/views/BlogPage/widgets/Pagination';
import PieChartBox from 'components/shared/widgets/PieChartBox';
import BlogList from './widgets/List';


import { bind } from 'lodash';
import { addLike, setPage } from 'actions/PostsAction';
import { POSTS_PER_PAGE } from 'constants/Pagination';
import { browserHistory } from 'react-router';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.like = bind(this.like, this);
    this.pageNumberClick = bind(this.pageNumberClick, this);
    this.paginate = bind(this.paginate, this);
  }

  like(id) {
    const { items, dispatch } = this.props;
    const index = items.findIndex(function(obj) { return obj.id == id; });
    dispatch(addLike(index));
  }

  paginate(items) {
    let k = 0;
    const paginated = {};

    for (let i = 0; k <= items.length; i++) {
      paginated[(i + 1).toString()] = items.slice(k, k + POSTS_PER_PAGE);
      k = k + POSTS_PER_PAGE;
    }

    return paginated;
  }

  pageNumberClick(e, { name }) {
    // this.setState({ currentPage: name });
    const { dispatch } = this.props;
    // const { location } = this.props;
    // dispatch(setPage(name));
    // console.log(`${name}`)
    browserHistory.push(`/?page=${name}`);
    // this.context.history.push({
    //   location,
    //   query: {someParam: "value"}
    // });
    // this.props.router.push('/some/path');
    // this.props.router.replace(`/?page=${name}`);
  }

  // [1, 2].forEach(function(i) { aa.push(n[i]); })

  render() {
    // const { items, currentPage } = this.state;
    // const { currentPage } = this.state;
    const { currentPage } = this.props;
    const { items } = this.props;
    const itemsPaginated = this.paginate(items);
    const pageNumbers = Object.keys(itemsPaginated);
    const pageNumberClick = this.pageNumberClick;
    const like = this.like;
    const itemsCurrent = itemsPaginated[currentPage];
    return React.createElement(
      // React.createElement(
        Grid,
        { divided: 'vertically' },
        React.createElement(
          Grid.Row,
          { columns: 2 },
          React.createElement(
            Grid.Column,
            { width: 10 },
            pageNumbers && React.createElement(
              Pagination,
              { pageNumberClick, currentPage, pageNumbers }
            ),
            React.createElement(
              BlogList, { items: itemsCurrent, like }
            )
          ),
          React.createElement(
            Grid.Column,
            { width: 6 },
            React.createElement(
              PieChartBox,
              { columns: map(items, (item) => ([item.title, item.meta.count])) }
            )
          )
        )
      // )

      // BlogPage,
      // {
      //   items,
      //   like: this.like,
      //   pageNumberClick: this.pageNumberClick,
      //   currentPage,
      //   itemsCurrent: itemsPaginated[currentPage],
      //   pageNumbers
      // }
    );
  }
}




// const BlogPage = (
//   // { items, itemsCurrent = items, like, pageNumberClick, currentPage, pageNumbers }
//   { items, itemsCurrent, like, pageNumberClick, currentPage, pageNumbers }
// ) => (
//   React.createElement(
//     Grid,
//     { divided: 'vertically' },
//     React.createElement(
//       Grid.Row,
//       { columns: 2 },
//       React.createElement(
//         Grid.Column,
//         { width: 10 },
//         pageNumbers && React.createElement(
//           Pagination,
//           { pageNumberClick, currentPage, pageNumbers }
//         ),
//         React.createElement(
//           BlogList, { items: itemsCurrent, like }
//         )
//       ),
//       React.createElement(
//         Grid.Column,
//         { width: 6 },
//         React.createElement(
//           PieChartBox,
//           { columns: map(items, (item) => ([item.title, item.meta.count])) }
//         )
//       )
//     )
//   )
// );

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  like: PropTypes.func,
  itemsCurrent: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  pageNumberClick: PropTypes.func,
  currentPage: PropTypes.string,
  pageNumbers: PropTypes.arrayOf(PropTypes.string),

  dispatch: PropTypes.func
};

export default BlogPage;
