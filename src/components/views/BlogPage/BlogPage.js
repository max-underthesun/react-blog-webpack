import React, { PropTypes } from 'react';
import { map } from 'lodash';
import { Grid } from 'semantic-ui-react';

import BlogItem from 'components/shared/widgets/BlogItem';
import Pagination from 'components/views/BlogPage/widgets/Pagination';
import PieChartBox from 'components/shared/widgets/PieChartBox';
import BlogList from './widgets/List';

const BlogPage = (
  { items, itemsCurrent, like, pageNumberClick, activeItem, pageNumbers }
) => (
  React.createElement(
    Grid,
    { divided: 'vertically' },
    React.createElement(
      Grid.Row,
      { columns: 2 },
      React.createElement(
        Grid.Column,
        { width: 10 },
        React.createElement(
          Pagination,
          { pageNumberClick, activeItem, pageNumbers }
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
  )
);

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  like: PropTypes.func,
  itemsCurrent: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  pageNumberClick: PropTypes.func,
  activeItem: PropTypes.string,
  pageNumbers: PropTypes.arrayOf(PropTypes.string)
};

export default BlogPage;