import React, { DOM } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TextField extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      DOM.div(
        { className: classNames('ui field', { error }) },
        DOM.label(
          { htmlFor: name },
          label
        ),
        DOM.input(
          {
            type: 'text',
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

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldRef: PropTypes.func.isRequired,
  error: PropTypes.bool
};

export default TextField;
