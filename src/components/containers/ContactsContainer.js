import React, { DOM, PropTypes } from 'react';
import { assign, mapValues } from 'lodash/object';
import classNames from 'classnames';

import { Container, Header } from 'semantic-ui-react';


class ContactsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: {} };
    this.form = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  // componentDidMount() {
  // }

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
      React.createElement(
        Container,
        { className: 'blog-item-container', text: true },
        DOM.div(
          { className: 'blog-item' },
          React.createElement(
            Header,
            { as: 'h2', className: 'blog-item-header'},
            'Contacts'
          ),
          DOM.form(
            {
              onSubmit: this.onSubmit,
              className: 'ui form'
            },
            React.createElement(
              Text,
              {
                label: 'Full name',
                name: 'fullName',
                fieldRef: this.generateRef('fullName')
              }
            ),
            React.createElement(
              Text,
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
            // DOM.div(
            //   { className: 'ui field' },
            //   DOM.label(
            //     { for: 'fullName' },
            //     'Full name:'
            //   ),
            //   DOM.input(
            //     {
            //       ref: (input) => { this.form.fullName = input; },
            //       className: 'ui input',
            //       id: 'fullName',
            //       name: 'fullName'
            //     }
            //   )
            // ),
            DOM.input(
              { className:'ui button primary', type: 'submit', value: 'Submit'}
            )
          )
        )
      )
    );
  }
}

export default ContactsContainer;

class Text extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      DOM.div(
        // { className: 'ui field' },
        { className: classNames('ui field', { error }) },
        DOM.label(
          { for: name },
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

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;

    return (
      DOM.div(
        { className: 'ui field' },
        DOM.label(
          { for: name },
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

Text.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldRef: PropTypes.func.isRequired,
  // error: PropTypes.
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldRef: PropTypes.func.isRequired
};
