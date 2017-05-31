import React, { PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

import Link from 'components/shared/elements/Link';
import { postsEditPath } from 'helpers/routes';

const EditPostButton = ({ id }) => (
  React.createElement(
    Link,
    { to: postsEditPath(id) },
    React.createElement(
      Button,
      {
        inverted: true,
        color: 'green',
        floated: 'left'
      },
      'Edit'
    )
  )
);

EditPostButton.propTypes = {
  id: PropTypes.number
};

export default EditPostButton;
