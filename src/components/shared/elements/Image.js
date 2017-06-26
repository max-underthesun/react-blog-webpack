import React, { DOM } from 'react';
import PropTypes from 'prop-types';

import { Image as semanticImage } from 'semantic-ui-react';

const Image = ({ src, width, height }) => (
  DOM.div(
    { style: { minWidth: width, minHeight: height }, className: 'image-box' },
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
  src: '/images/no_image.png',
  width: '250px',
  height: '200px'
};

export default Image;
