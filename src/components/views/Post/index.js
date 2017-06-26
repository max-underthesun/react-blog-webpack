import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { get } from 'lodash';

import { Item, Grid } from 'semantic-ui-react';

import Buttons from 'components/layouts/widgets/Buttons';
import BlogItem from 'components/shared/widgets/BlogItem';

const Post = ({ item }) => (
  React.createElement(
    Grid,
    {},
    React.createElement(Buttons, { goBack: true, editPost: get(item, 'id') }),
    React.createElement(
      Grid.Row,
      {},
      React.createElement(
        Grid.Column,
        { width: 10 },
        React.createElement(
          Item.Group,
          {},
          React.createElement(BlogItem, item),
          React.createElement(Helmet, { title: get(item, 'title') })
        )
      )
    )
  )
);

Post.propTypes = {
  item: PropTypes.shape(BlogItem.propTypes)
};

export default Post;
