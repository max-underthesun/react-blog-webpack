import React, { DOM } from 'react';
import { assign, mapValues } from 'lodash/object';

import { Header } from 'semantic-ui-react';

import TextField from './elements/TextFieldUncontrolled';
import TextArea from './elements/TextAreaUncontrolled';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: {} };
    this.form = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });

    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.length < 3) {
      this.setState(
        assign(
          {},
          this.state,
          { errors: assign({}, this.state.errors, { email: true }) }
        )
      );
    }

    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      DOM.div(
        { className: 'meta-box' },
        React.createElement(
          Header,
          { as: 'h3' },
          'Uncontrolled Form'
        ),
        DOM.form(
          {
            onSubmit: this.onSubmit,
            className: 'ui form'
          },
          React.createElement(
            TextField,
            {
              label: 'Full name',
              name: 'fullName',
              fieldRef: this.generateRef('fullName')
            }
          ),
          React.createElement(
            TextField,
            {
              label: 'Email',
              name: 'email',
              error: this.state.errors.email,
              fieldRef: this.generateRef('email')
            }
          ),
          React.createElement(
            TextArea,
            {
              label: 'Message',
              name: 'message',
              fieldRef: this.generateRef('message')
            }
          ),
          DOM.input(
            { className:'ui button primary', type: 'submit', value: 'Submit'}
          )
        )
      )
    );
  }
}

export default UncontrolledForm;
