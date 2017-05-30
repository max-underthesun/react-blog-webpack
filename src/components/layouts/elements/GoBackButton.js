import React from 'react';
import { Button } from 'semantic-ui-react';

import history from 'helpers/history';

const GoBackButton = () => (
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
);

export default GoBackButton;
