import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash';

import { Item } from 'semantic-ui-react';

import Link from 'components/shared/elements/Link';
import { postsPath } from 'helpers/routes';
import BlogItem from 'components/shared/widgets/BlogItem';
import EditButton from './elements/EditButton';

const Post = ({ item }) => (
  React.createElement(
    Item.Group,
    {},
    React.createElement(BlogItem, item),
    React.createElement(Helmet, { title: get(item, 'title') }),
    React.createElement(
      Link,
      { to: `${postsPath(get(item, 'id'))}/edit` },
      React.createElement(EditButton)
    )
  )
);

Post.propTypes = {
  item: PropTypes.shape(BlogItem.propTypes)
};

export default Post;
