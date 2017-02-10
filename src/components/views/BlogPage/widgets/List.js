import React, { DOM } from 'react';
import { map } from 'lodash/collection';

import BlogItem from 'components/shared/widgets/BlogItem';

const BlogList = ({ items, like }) => (
  DOM.div(
    null,
    map(
      items,
      (item) => (
        React.createElement(
          BlogItem,
          Object.assign({ key: item.id }, item, { like })
        )
      )
    )
  )
);

export default BlogList;
