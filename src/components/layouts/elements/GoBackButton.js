import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

import history from 'helpers/history';

const GoBackButton = () => (
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
            onClick: () => history.goBack(),
            inverted: true,
            color: 'orange',
            floated: 'left'
          },
          'Back'
        )
      )
    )
  )
);

export default GoBackButton;
