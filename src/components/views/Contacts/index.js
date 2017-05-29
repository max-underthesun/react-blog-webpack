import React, { DOM } from 'react';

import { Container, Header } from 'semantic-ui-react';

// import UncontrolledForm from './forms/UncontrolledFormContainer';
import ControlledForm from './forms/ControlledFormContainer';

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
      // React.createElement(UncontrolledForm)
      React.createElement(ControlledForm)
    )
  )
);

export default Contacts;
