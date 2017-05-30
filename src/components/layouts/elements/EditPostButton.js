import React from 'react';

import { Button } from 'semantic-ui-react';

import Link from 'components/shared/elements/Link';
import { postsPath } from 'helpers/routes';

const EditPostButton = ({ id }) => (
  React.createElement(
    Link,
    { to: `${postsPath(id)}/edit` },
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

// const EditButton = () => (
//   React.createElement(
//     Grid,
//     {},
//     React.createElement(
//       Grid.Row,
//       {},
//       React.createElement(
//         Grid.Column,
//         {},
//         React.createElement(
//           Button,
//           {
//             inverted: true,
//             color: 'red',
//             floated: 'left'
//           },
//           'Edit'
//         )
//       )
//     )
//   )
// );

export default EditPostButton;
