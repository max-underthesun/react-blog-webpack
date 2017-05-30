import React from 'react';

import { Button } from 'semantic-ui-react';

import Link from 'components/shared/elements/Link';

const NewPostButton = () => (
  React.createElement(
    Link,
    { to: '/post/new' },
    React.createElement(
      Button,
      {
        inverted: true,
        color: 'blue',
        floated: 'left'
      },
      'New Post'
    )
  )
);

export default NewPostButton;
