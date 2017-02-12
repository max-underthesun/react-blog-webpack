import React, { DOM, PropTypes } from 'react';
import { bind } from 'lodash';
import { Button } from 'semantic-ui-react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    return this.props.like(this.props.id);
  }

  render() {
    return React.createElement(
      LikeBox,
      { count: this.props.meta.count, handleClick: this.handleClick }
    );
  }
}

const LikeBox = (props) => (
  DOM.div(
    { className: 'like-box' },
    React.createElement(
      Button,
      {
        onClick: props.handleClick,
        color: 'grey',
        content: 'Like',
        icon: 'thumbs up',
        label: {
          content: props.count,
          basic: true,
          color: 'grey',
          pointing: 'left'
        }
      }
    )
  )
);

Like.propTypes = {
  id: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired
};

export default Like;
