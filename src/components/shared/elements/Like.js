import React, { DOM } from 'react';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';

import { addLike } from 'actions/PostsAction';

const actionsToProps = (dispatch, ownProps) => ({
  like: () => dispatch(addLike(ownProps.id))
});

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

export default connect(null, actionsToProps)(Like);
