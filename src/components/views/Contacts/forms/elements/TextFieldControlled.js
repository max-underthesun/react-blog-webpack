import { DOM } from 'react';
import classNames from 'classnames';

const TextControlled = ({ label, name, value, onChange, error }) => (
  DOM.div(
    { className: classNames('ui field', { error }) },
    DOM.label(
      { htmlFor: name },
      label
    ),
    DOM.input(
      {
        type: 'text',
        className: 'ui input',
        value,
        id: name,
        name,
        onChange
      }
    )
  )
);

export default TextControlled;
