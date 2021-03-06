import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { map } from 'lodash';

import { Grid } from 'semantic-ui-react';

import Buttons from 'components/layouts/widgets/Buttons';
import BlogItem from 'components/shared/widgets/BlogItem';
import Pagination from 'components/views/BlogPage/widgets/Pagination';
import PieChartBox from 'components/shared/widgets/PieChartBox';
import BlogList from './widgets/List';

const BlogPage = ({ items, currentPage, pageNumbers, itemsCurrent }) => (
  React.createElement(
    Grid,
    {},
    React.createElement(Buttons, { goBack: true, newPost: true }),
    React.createElement(
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
            { currentPage, pageNumbers }
          ),
          React.createElement(
            BlogList,
            { items: itemsCurrent }
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
      ),
      React.createElement(Helmet, { title: 'Posts list' })
    )
  )
);

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  itemsCurrent: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  currentPage: PropTypes.string,
  pageNumbers: PropTypes.arrayOf(PropTypes.string)
};

export default BlogPage;
