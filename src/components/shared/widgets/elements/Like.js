import React, { DOM, PropTypes } from 'react';
import { bind, assign } from 'lodash';
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
    { style: likeBoxStyle },
    React.createElement(
      Button,
      assign(
        { onClick: props.handleClick },
        likeButtonStyle,
        { label: assign({ content: props.count }, likeLabelStyle) }
      )
    )
  )
);

Like.propTypes = {
  id: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired
};

const likeBoxStyle = {
  margin: '25px'
};

const likeButtonStyle = {
  color: 'grey',
  content: 'Like',
  icon: 'thumbs up',
};

const likeLabelStyle = {
  basic: true,
  color: 'grey',
  pointing: 'left'
};

export default Like;
