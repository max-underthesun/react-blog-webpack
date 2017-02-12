import React, { DOM, PropTypes } from 'react';

import { Container, Header } from 'semantic-ui-react';

import TextBox  from 'components/shared/elements/TextBox';
import Like     from 'components/shared/elements/Like';
import MetaData from 'components/shared/elements/Meta';
import Image    from 'components/shared/elements/Image';
import Link from 'components/shared/elements/Link';
import { postsPath } from 'helpers/routes';

const BlogItem = ({ id, title, image, text, meta, like }) => (
  React.createElement(
    Container,
    // { style: blogItemStyle.outerWrapper, text: true },
    { className: 'blog-item-container', text: true },
    DOM.div(
      // { style: blogItemStyle.postWrapper, key: 'mainBlock' },
      { className: 'blog-item', key: 'mainBlock' },
      React.createElement(
        Header,
        // { as: 'h2', style: headerStyle},
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
      like && React.createElement(Like, { meta, id, like })
    )
  )
);

BlogItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  like: PropTypes.func,
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

// const blogItemStyle = {
//   outerWrapper: {
//     backgroundColor: '#ccc',
//     margin: '10px',
//     padding: '10px'
//   },
//   postWrapper: {
//     margin: '10px',
//     padding: '10px'
//   }
// };

// const headerStyle = {
//   margin: '15px',
//   marginTop: '20px',
//   color: '#666',
// };

export default BlogItem;
