import React, { DOM, PropTypes } from 'react';
// import { Button } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
// import { Image } from 'semantic-ui-react';
// import { assign } from 'lodash';


import TextBox  from './elements/TextBox';
import Like     from './elements/Like';
import MetaData     from './elements/Meta';
import Image    from './elements/Image';

// const BlogItem = ({ id, title, image, text, meta, like }) => (
//   DOM.div(
//     { style: blogItemStyle.outerWrapper },
//     DOM.div(
//       { style: blogItemStyle.postWrapper },
//       React.createElement(TitleBox, { title }),
//       React.createElement(Image, image),
//       React.createElement(TextBox, text)
//     ),
//     DOM.br(null),
//     React.createElement(MetaData, meta),
//     React.createElement(Like, { meta, id, like })
//   )
// );
//

const BlogItem = ({ id, title, image, text, meta, like }) => (
  React.createElement(
    Container,
    // assign({ style: blogItemStyle.outerWrapper }, { text: true }),
    { style: blogItemStyle.outerWrapper, text: true },
    DOM.div(
      { style: blogItemStyle.postWrapper },
      React.createElement(TitleBox, { title }),
      React.createElement(MetaData, meta),
      React.createElement(Image, image),
      // React.createElement(
      //   Image,
      //   assign({}, { src: image.src }, { fluid: true })
      // ),
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
  image: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

const blogItemStyle = {
  outerWrapper: {
    // backgroundColor: '#dddddd',
    backgroundColor: '#ccc',
    // border: '1px solid green',
    margin: '10px',
    padding: '10px'
    // ,
    // height: '100%'
  },
  postWrapper: {
    // border: '3px solid orange',
    margin: '10px',
    padding: '10px'
    // height: '100%'
    // ,
    // overflow: 'hidden'
  }
};

const TitleBox  = ({ title }) => (
  DOM.div(
    { style: titleStyle },
    DOM.h2(null, title)
  )
);

const titleStyle = {
  // border: '2px solid red',
  margin: '15px',
  marginTop: '30px',
  // padding: '10px',
  color: '#666',
};

export default BlogItem;
