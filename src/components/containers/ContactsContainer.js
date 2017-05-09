import React, { DOM, PropTypes } from 'react';
import { Container, Header } from 'semantic-ui-react';


class ContactsContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { info: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // this.fetchAbout();
  }

  onSubmit(e) {
    e.preventDefault();
    alert(this.fullName.value);
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
            DOM.div(
              { className: 'ui field' },
              DOM.label(
                { for: 'fullName' },
                'Full name:'
              ),
              DOM.input(
                {
                  ref: (input) => { this.fullName = input; },
                  className: 'ui input',
                  id: 'fullName',
                  name: 'fullName'
                }
              )
            ),
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
