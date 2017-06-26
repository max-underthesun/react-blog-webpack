import React, { DOM } from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;

    return (
      DOM.div(
        { className: 'ui field' },
        DOM.label(
          { htmlFor: name },
          label
        ),
        DOM.textarea(
          {
            ref: fieldRef,
            className: 'ui input',
            id: name,
            name
          }
        )
      )
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldRef: PropTypes.func.isRequired
};

export default TextArea;
