import { DOM } from 'react';
import classNames from 'classnames';

const TextAreaControlled = ({ label, name, value, onChange, error }) => (
  DOM.div(
    { className: classNames('ui field', { error }) },
    DOM.label(
      { htmlFor: name },
      label
    ),
    DOM.textarea(
      {
        className: 'ui textarea',
        value,
        id: name,
        name,
        onChange
      }
    )
  )
);

export default TextAreaControlled;
