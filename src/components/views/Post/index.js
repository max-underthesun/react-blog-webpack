import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/shared/widgets/BlogItem';

const Post = ({ item }) => (
  React.createElement(
    Item.Group,
    {},
    item && React.createElement(
      BlogItem,
      // item
      Object.assign(item, { renderLike: false })
    )
  )
);

Post.propTypes = {
  item: PropTypes.shape(BlogItem.propTypes)
};

export default Post;
