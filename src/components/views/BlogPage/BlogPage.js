import React, { PropTypes } from 'react';
import { map } from 'lodash';
import { Grid } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';
import PaginationContainer from 'components/containers/BlogPage/PaginationContainer';
import PieChart from 'components/widgets/blog/PieChart';

const BlogPage = ({ items, like }) => (
  React.createElement(
    Grid,
    { divided: 'vertically' },
    React.createElement(
      Grid.Row,
      { columns: 2 },
      React.createElement(
        PaginationContainer,
        { items, like }
      ),
      React.createElement(
        Grid.Column,
        { width: 6 },
        React.createElement(
          PieChart,
          { columns: map(items, (item) => ([item.title, item.meta.count])) }
        )
      )
    )
  )
);

BlogPage.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.shape(BlogItem.propTypes)),
  like: PropTypes.func
};

export default BlogPage;
