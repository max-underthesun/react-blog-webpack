import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { map, bind } from 'lodash';
import { Grid } from 'semantic-ui-react';

import { POSTS_PER_PAGE } from 'constants/Pagination';
import BlogItem from 'components/shared/widgets/BlogItem';
import Pagination from 'components/views/BlogPage/widgets/Pagination';
import PieChartBox from 'components/shared/widgets/PieChartBox';
import BlogList from './widgets/List';
// import { addLike } from 'actions/PostsAction';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    // this.like = bind(this.like, this);
    this.pageNumberClick = bind(this.pageNumberClick, this);
    this.paginate = bind(this.paginate, this);

    this.itemsCurrent = bind(this.itemsCurrent, this);
  }

  // like(id) {
  //   const { items, dispatch } = this.props;
  //   const index = items.findIndex(function(obj) { return obj.id == id; });
  //   dispatch(addLike(index));
  // }

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
    browserHistory.push(`/?page=${name}`);
  }

  itemsCurrent(currentItemsIds, items) {
    const itemsCurrent = [];
    currentItemsIds.forEach(
      function(id) { itemsCurrent.push(items[id]); }
    );
    return itemsCurrent;
  }

  render() {
    const { items, currentPage } = this.props;
    const pageNumberClick = this.pageNumberClick;
    // const like = this.like;
    const itemsPaginated = this.paginate(items);
    const pageNumbers = Object.keys(itemsPaginated);
    const itemsCurrent = itemsPaginated[currentPage];

    return React.createElement(
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
              // BlogList, { items: itemsCurrent, like }
              BlogList, { items: itemsCurrent }
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
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  // like: PropTypes.func,
  itemsCurrent: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  pageNumberClick: PropTypes.func,
  currentPage: PropTypes.string,
  pageNumbers: PropTypes.arrayOf(PropTypes.string),

  dispatch: PropTypes.func
};

export default BlogPage;
