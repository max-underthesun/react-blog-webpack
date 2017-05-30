import React, { PropTypes } from 'react';

import { Grid } from 'semantic-ui-react';

import GoBackButton from '../elements/GoBackButton';
import EditPostButton from '../elements/EditPostButton';
import NewPostButton from '../elements/NewPostButton';

const Buttons = ({ goBack, editPost, newPost }) => (
  React.createElement(
    Grid.Row,
    { columns: 1 },
    React.createElement(
      Grid.Column,
      {},
      goBack && React.createElement(GoBackButton),
      editPost && React.createElement(EditPostButton, { id: editPost }),
      newPost && React.createElement(NewPostButton)
    )
  )
);

Buttons.propTypes = {
  goBack: PropTypes.bool,
  editPost: PropTypes.number,
  newPost: PropTypes.bool
};

export default Buttons;
