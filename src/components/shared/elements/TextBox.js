import { DOM } from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ post }) => (
  DOM.div({ className: 'text-box' }, post)
);

TextBox.propTypes = {
  post: PropTypes.string
};

TextBox.defaultProps = {
  post: '** empty entry **'
};

export default TextBox;
