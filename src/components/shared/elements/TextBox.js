import { DOM, PropTypes } from 'react';

const TextBox = ({ post }) => (
  // DOM.div({ style: textBoxStyle }, post)
  DOM.div({ className: 'text-box' }, post)
);

TextBox.propTypes = {
  post: PropTypes.string
};

TextBox.defaultProps = {
  post: '** empty entry **'
};

// const textBoxStyle = {
//   margin: '15px',
//   fontSize: '1.1em'
// };

export default TextBox;
