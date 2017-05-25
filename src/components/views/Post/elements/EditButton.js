import React from 'react';

import { Button, Grid } from 'semantic-ui-react';

const EditButton = () => (
  React.createElement(
    Grid,
    {},
    React.createElement(
      Grid.Row,
      {},
      React.createElement(
        Grid.Column,
        {},
        React.createElement(
          Button,
          {
            inverted: true,
            color: 'red',
            floated: 'left'
          },
          'Edit'
        )
      )
    )
  )
);

export default EditButton;
