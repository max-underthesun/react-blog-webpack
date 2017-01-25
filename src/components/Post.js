import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import { find } from 'lodash';

import { items as staticItems } from 'constants/static/items';
import BlogItem from 'components/widgets/blog/Item';

const Post = ({ params }) => (
  React.createElement(
    Item.Group,
    {},
    React.createElement(
      BlogItem,
      find(staticItems, function(item) { return item.id == params.id; })
    )
  )
);

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
