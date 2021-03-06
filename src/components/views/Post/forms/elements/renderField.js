import { DOM } from 'react';
// import { assign } from 'lodash/object';
import classNames from 'classnames';

const renderField = (
  { input, label, type, meta: { touched, error, warning } }
) => (
  DOM.div(
    { className: classNames('ui field', { error }) },
    DOM.label({}, label),
    // DOM.input(assign({ type, className: 'ui input' }, input)),
    DOM.input({ ...input, type, className: 'ui input' }),
    touched && (
      error && DOM.div({ className: 'ui red label' }, error) ||
      warning && DOM.div({ className: 'ui yellow label' }, warning)
    )
  )
);

export default renderField;
