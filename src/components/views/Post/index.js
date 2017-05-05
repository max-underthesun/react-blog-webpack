import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/shared/widgets/BlogItem';

const Post = ({ item }) => (
  React.createElement(
    Item.Group,
    {},
    item && React.createElement(BlogItem, item),
    item && React.createElement(Helmet, { title: item.title })
  )
);

Post.propTypes = {
  item: PropTypes.shape(BlogItem.propTypes)
};

export default Post;
