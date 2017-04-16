import React, { DOM, PropTypes } from 'react';

import { Container, Header } from 'semantic-ui-react';

import TextBox from 'components/shared/elements/TextBox';
import Like from 'components/shared/elements/Like';
import MetaData from 'components/shared/elements/Meta';
import Image from 'components/shared/elements/Image';
import Link from 'components/shared/elements/Link';
import { postsPath } from 'helpers/routes';

// const BlogItem = ({ id, title, image, text, meta, like }) => (
const BlogItem = ({ id, title, image, text, meta, renderLike }) => (
  React.createElement(
    Container,
    { className: 'blog-item-container', text: true },
    DOM.div(
      { className: 'blog-item', key: 'mainBlock' },
      React.createElement(
        Header,
        { as: 'h2', className: 'blog-item-header'},
        React.createElement(
          Link,
          { to: postsPath(id)},
          title
        )
      ),
      React.createElement(MetaData, meta),
      React.createElement(Image, image),
      React.createElement(TextBox, text),
      // like && React.createElement(Like, { meta, id, like })
      renderLike && React.createElement(Like, { meta, id })
      // React.createElement(Like, { meta, id })
    )
  )
);

BlogItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  renderLike: PropTypes.bool,
  // like: PropTypes.func,
  // like: PropTypes.func.isRequired,
  image: PropTypes.shape(Image.propTypes).isRequired,
  text: PropTypes.shape(TextBox.propTypes).isRequired,
  meta: PropTypes.shape(MetaData.propTypes).isRequired
};

BlogItem.defaultProps = {
  id: null,
  title: '',
  like: null,
  image: {},
  text: {},
  meta: {}
};

export default BlogItem;
