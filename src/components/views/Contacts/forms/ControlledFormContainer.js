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
    );
  }
}

export default ControlledFormContainer;
