import React, { DOM, PropTypes } from 'react';
import { assign } from 'lodash';
import { Image as semanticImage } from 'semantic-ui-react';

const Image = ({ src, width, height }) => (
  DOM.div(
    { style: assign({ minWidth: width, minHeight: height }, imageStyle) },
    React.createElement(
      semanticImage,
      { src, fluid: true }
    )
  )
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Image.defaultProps = {
  src: 'dist/images/no_image.png',
  width: '250px',
  height: '200px'
};

const imageStyle = {
  margin: '15px',
};

export default Image;
