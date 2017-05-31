import React, { DOM } from 'react';

import { Container, Header, Grid } from 'semantic-ui-react';

// import UncontrolledForm from './forms/UncontrolledFormContainer';
import ControlledForm from './forms/ControlledFormContainer';
import Buttons from 'components/layouts/widgets/Buttons';

const Contacts = () => (
  React.createElement(
    Grid,
    {},
    React.createElement(Buttons, { goBack: true }),
    React.createElement(
      Grid.Row,
      {},
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
    )
  )
);

export default Contacts;
