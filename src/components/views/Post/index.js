import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash';

import { Item } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

import Buttons from 'components/layouts/widgets/Buttons';
// import Link from 'components/shared/elements/Link';
// import { postsPath } from 'helpers/routes';
import BlogItem from 'components/shared/widgets/BlogItem';
// import EditPostButton from './elements/EditPostButton';

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
