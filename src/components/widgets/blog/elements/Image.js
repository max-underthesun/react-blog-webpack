import React, { DOM, PropTypes } from 'react';
import { assign } from 'lodash';
import { Image as semanticImage } from 'semantic-ui-react';

const Image = ({ src, width, height }) => (
  DOM.div(
    { style: assign({ minWidth: width, minHeight: height }, imageStyle) },
    React.createElement(
      semanticImage,
      assign({}, { src, fluid: true })
    )
  )
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Image.defaultProps = {
  // src: 'https://js.cx/gallery/img6-lg.jpg',
  src: 'dist/images/no_image.png',
  width: '250px',
  height: '200px'
};

const imageStyle = {
  // border: '2px solid purple',
  margin: '15px',
  // padding: '5px',
};

export default Image;
