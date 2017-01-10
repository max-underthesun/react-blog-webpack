import React, { DOM, PropTypes } from 'react';
import { Container, Header } from 'semantic-ui-react';

import TextBox  from './elements/TextBox';
import Like     from './elements/Like';
import MetaData from './elements/Meta';
import Image    from './elements/Image';

const BlogItem = ({ id, title, image, text, meta, like }) => (
  React.createElement(
    Container,
    { style: blogItemStyle.outerWrapper, text: true },
    DOM.div(
      { style: blogItemStyle.postWrapper },
      React.createElement(Header, { as: 'h2', style: headerStyle}, title),
      React.createElement(MetaData, meta),
      React.createElement(Image, image),
      React.createElement(TextBox, text)
    ),
    DOM.br(null),
    React.createElement(Like, { meta, id, like })
  )
);

BlogItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  image: PropTypes.shape(Image.propTypes).isRequired,
  text: PropTypes.shape(TextBox.propTypes).isRequired,
  meta: PropTypes.shape(MetaData.propTypes).isRequired
};

const blogItemStyle = {
  outerWrapper: {
    backgroundColor: '#ccc',
    margin: '10px',
    padding: '10px'
  },
  postWrapper: {
    margin: '10px',
    padding: '10px'
  }
};

const headerStyle = {
  margin: '15px',
  marginTop: '20px',
  color: '#666',
};

export default BlogItem;
