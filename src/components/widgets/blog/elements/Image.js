import { DOM, PropTypes } from 'react';
import { assign } from 'lodash/collection';

// const Image = ({ src, width, height, alt }) => (
//   <img
//     src={src}
//     width={width}
//     height={height}
//     alt={alt}
//   />
// );

const Image = ({ src, width, height }) => (
  DOM.div(
    { style: assign({}, imageStyle, { minWidth: width, minHeight: height }) },
    DOM.img({ src, width, height })
  )
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

Image.defaultProps = {
  src: 'https://js.cx/gallery/img6-lg.jpg',
  width: '250px',
  height: '200px'
};

const imageStyle = {
  border: '2px solid red',
  margin: '10px',
  padding: '5px',
  maxWidth: '30%',
  display: 'inline-block'
};

export default Image;
