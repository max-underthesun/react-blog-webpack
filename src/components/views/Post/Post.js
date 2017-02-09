import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';

const Post = ({ item }) => (
  React.createElement(
    Item.Group,
    {},
    React.createElement(
      BlogItem,
      item
    )
  )
);

Post.propTypes = {
  item: PropTypes.shape(BlogItem.propTypes)
};

export default Post;
