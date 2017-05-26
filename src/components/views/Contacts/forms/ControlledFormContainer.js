import React from 'react';
import { set, assign } from 'lodash/object';

import ControlledForm from './ControlledForm';

class ControlledFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email': {
          // this.clearError('email');
          this.setErrorStatus('email', false);
          if (!e.target.value || e.target.value.length < 3) {
            this.setErrorStatus('email', true);
          }
          break;
        }
      }

      this.setState(
        set(
          assign({}, this.state),
          ['form','values', fieldName],
          e.target.value
        )
      );
    };
  }

  setErrorStatus(fieldName, status) {
    this.setState(
      set(
        assign({}, this.state),
        ['form','errors', fieldName],
        status
      )
    );
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      React.createElement(
        ControlledForm,
        {
          fullName,
          email,
          message,
          onSubmit: this.onSubmit,
          onChange: this.handleChange,
          errors: this.state.form.errors
        }
      )
      // DOM.div(
      //   { className: 'meta-box' },
      //   React.createElement(
      //     Header,
      //     { as: 'h3' },
      //     'Controlled Form'
      //   ),
      //   DOM.form(
      //     {
      //       onSubmit: this.onSubmit,
      //       className: 'ui form'
      //     },
      //     React.createElement(
      //       TextControlled,
      //       {
      //         label: 'Full name',
      //         name: 'fullName',
      //         value: fullName,
      //         onChange: this.handleChange('fullName')
      //       }
      //     ),
      //     React.createElement(
      //       TextControlled,
      //       {
      //         label: 'Email',
      //         name: 'email',
      //         value: email,
      //         error: this.state.form.errors.email,
      //         onChange: this.handleChange('email')
      //       }
      //     ),
      //     React.createElement(
      //       TextAreaControlled,
      //       {
      //         label: 'Message',
      //         name: 'message',
      //         value: message,
      //         onChange: this.handleChange('message')
      //       }
      //     ),
      //     DOM.input(
      //       { className:'ui button primary', type: 'submit', value: 'Submit'}
      //     )
      //   )
      // )
    );
  }
}

export default ControlledFormContainer;
