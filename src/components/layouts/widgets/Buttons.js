import React from 'react';

import { Grid } from 'semantic-ui-react';

import GoBackButton from '../elements/GoBackButton';
import EditPostButton from '../elements/EditPostButton';
import NewPostButton from '../elements/NewPostButton';

const Buttons = ({ goBack, editPost, newPost }) => (
  // React.createElement(
  //   Grid,
  //   {},
    React.createElement(
      Grid.Row,
      { columns: 1 },
      React.createElement(
        Grid.Column,
        {},
        // React.createElement(GoBackButton)
        goBack && React.createElement(GoBackButton),
        editPost && React.createElement(EditPostButton, { id: editPost }),
        newPost && React.createElement(NewPostButton)
      )
    )
  // )
);

export default Buttons;
