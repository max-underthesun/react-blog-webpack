import React, { DOM } from 'react';

import { Header } from 'semantic-ui-react';

import TextField from './elements/TextFieldControlled';
import TextArea from './elements/TextAreaControlled';

const ControlledForm = (
  { fullName, email, message, onSubmit, onChange, errors }
) => (
  DOM.div(
    { className: 'meta-box' },
    React.createElement(
      Header,
      { as: 'h3' },
      'Controlled Form'
    ),
    DOM.form(
      {
        onSubmit,
        className: 'ui form'
      },
      React.createElement(
        TextField,
        {
          label: 'Full name',
          name: 'fullName',
          value: fullName,
          onChange: onChange('fullName')
        }
      ),
      React.createElement(
        TextField,
        {
          label: 'Email',
          name: 'email',
          value: email,
          error: errors.email,
          onChange: onChange('email')
        }
      ),
      React.createElement(
        TextArea,
        {
          label: 'Message',
          name: 'message',
          value: message,
          onChange: onChange('message')
        }
      ),
      DOM.input(
        { className:'ui button primary', type: 'submit', value: 'Submit'}
      )
    )
  )
);

export default ControlledForm;
