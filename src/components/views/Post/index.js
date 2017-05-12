import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import { Item } from 'semantic-ui-react';
import { Button, Grid } from 'semantic-ui-react';

import Link from 'components/shared/elements/Link';
import { postsPath } from 'helpers/routes';
import BlogItem from 'components/shared/widgets/BlogItem';

const Post = ({ item }) => (
  React.createElement(
    Item.Group,
    {},
    item && React.createElement(BlogItem, item),
    item && React.createElement(Helmet, { title: item.title }),
    item && React.createElement(
      Link,
      { to: `${postsPath(item.id)}/edit` },
      React.createElement(
        EditButton
      )
    )
  )
);

// MOVE IT SOMETHERE ????
// MOVE IT SOMETHERE ????
// MOVE IT SOMETHERE ????
// MOVE IT SOMETHERE ????
const EditButton = () => (
  React.createElement(
    Grid,
    {},
    React.createElement(
      Grid.Row,
      {},
      React.createElement(
        Grid.Column,
        {},
        React.createElement(
          Button,
          {
            inverted: true,
            color: 'red',
            floated: 'left'
          },
          'Edit'
        )
      )
    )
  )
);

Post.propTypes = {
  item: PropTypes.shape(BlogItem.propTypes)
};

export default Post;
