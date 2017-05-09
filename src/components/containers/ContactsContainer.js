import React, { DOM, PropTypes } from 'react';
import { mapValues } from 'lodash/object';

import { Container, Header } from 'semantic-ui-react';


class ContactsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.form = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  // componentDidMount() {
  // }

  onSubmit(e) {
    e.preventDefault();
    const values = mapValues(this.form, 'value');
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
                fieldRef: this.generateRef('email')
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
    const { label, name, fieldRef } = this.props;

    return (
      DOM.div(
        { className: 'ui field' },
        DOM.label(
          { for: name },
          label
        ),
        DOM.input(
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
  fieldRef: PropTypes.func.isRequired
};
