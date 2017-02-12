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
    // { style: likeBoxStyle },
    { className: 'like-box' },
    React.createElement(
      Button,
      // assign(
      //   { onClick: props.handleClick },
      //   likeButtonAttributes,
      //   { label: assign({ content: props.count }, likeLabelAttributes) }
      // )
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

// const likeBoxStyle = {
//   margin: '25px', marginLeft: '15px', marginTop: '50px'
// };

// const likeButtonAttributes = {
//   color: 'grey',
//   content: 'Like',
//   icon: 'thumbs up'
// };
//
// const likeLabelAttributes = {
//   basic: true,
//   color: 'grey',
//   pointing: 'left'
// };

export default Like;
