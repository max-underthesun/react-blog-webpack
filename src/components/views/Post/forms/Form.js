import React, { DOM } from 'react';
import { Field } from 'redux-form';

import { Header } from 'semantic-ui-react';

import renderField from './elements/renderField';
import renderTextArea from './elements/renderTextArea';

const Form = ({ handleSubmit, pristine, submitting, reset }) => (
  DOM.div(
    { className: 'meta-box' },
    React.createElement(Header, { as: 'h3' }, 'Redux Form'),
    DOM.form(
      {
        onSubmit: handleSubmit,
        className: 'ui form'
      },
      React.createElement(
        Field,
        {
          label: 'Title',
          component: renderField,
          type: 'text',
          name: 'title'
        }
      ),
      React.createElement(
        Field,
        {
          label: 'Text',
          component: renderTextArea,
          name: 'text'
        }
      ),
      (!pristine && !submitting) &&
        DOM.button({ className:'ui button', onClick: reset }, 'Clear'),
      DOM.input(
        { className:'ui button primary', type: 'submit', value: 'Update'}
      )
    )
  )
);

export default Form;
