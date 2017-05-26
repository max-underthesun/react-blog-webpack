import React, { DOM } from 'react';

import { Container, Header } from 'semantic-ui-react';

import ControlledForm from './forms/ControlledFormContainer';
// import UncontrolledForm from './forms/UncontrolledForm';

const Contacts = () => (
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
      React.createElement(ControlledForm)
      // , React.createElement(UncontrolledForm)
    )
  )
);

export default Contacts;
