import { DOM, PropTypes } from 'react';

const TextBox = ({ post }) => (
  DOM.div({ style: textBoxStyle }, post)
);

TextBox.propTypes = {
  post: PropTypes.string
};

TextBox.defaultProps = {
  post: '** empty entry **'
};

const textBoxStyle = {
  // border: '2px solid red',
  margin: '15px',
  // padding: '5px',
  // width: '60%',
  // display: 'inline-block',
  // verticalAlign: 'top'
  fontSize: '1.1em'
};

export default TextBox;
