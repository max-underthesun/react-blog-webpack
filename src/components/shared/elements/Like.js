import React, { DOM } from 'react';

import { Button } from 'semantic-ui-react';

const Like = (props) => (
  DOM.div(
    { className: 'like-box' },
    React.createElement(
      Button,
      {
        onClick: props.like,
        color: 'grey',
        content: 'Like',
        icon: 'thumbs up',
        label: {
          content: props.meta.count,
          basic: true,
          color: 'grey',
          pointing: 'left'
        }
      }
    )
  )
);

export default Like;
