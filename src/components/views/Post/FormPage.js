import React, { DOM, PropTypes } from 'react';

import { Container, Header, Grid } from 'semantic-ui-react';

import FormConnected from './forms/FormConnected';
import Buttons from 'components/layouts/widgets/Buttons';

const FormPage = ({ title }) => (
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
            title
          ),
          React.createElement(FormConnected)
        )
      )
    )
  )
);

FormPage.propTypes = {
  title: PropTypes.string
};

export default FormPage;
