import React, { DOM } from 'react';

import { Container, Header } from 'semantic-ui-react';

import FormConnected from './forms/FormConnected';

const EditPost = () => (
  React.createElement(
    Container,
    { className: 'blog-item-container', text: true },
    DOM.div(
      { className: 'blog-item' },
      React.createElement(
        Header,
        { as: 'h2', className: 'blog-item-header'},
        'Edit Post'
      ),
      React.createElement(
        FormConnected,
        {}
      )
    )
  )
);

export default EditPost;
