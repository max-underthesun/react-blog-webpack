import React, { DOM } from 'react';
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

// const LikeBox = (props) => (
//   DOM.span(
//     { style: likeBoxStyle.outerWrapper },
//     DOM.span({ style: likeBoxStyle.title }, 'Like: '),
//     DOM.span({ style: likeBoxStyle.count }, props.count),
//     React.createElement(Button, { onClick: props.handleClick }, 'like')
//     // DOM.button({ onClick: props.handleClick }, '+')
//   )
// );

const LikeBox = (props) => (
  DOM.div(
    // { style: likeBoxStyle.outerWrapper },
    { style: likeBoxStyle },
    // {  },
    // DOM.span({ style: likeBoxStyle.title }, 'Like: '),
    // DOM.span({ style: likeBoxStyle.count }, props.count),
    React.createElement(
      Button,
      // {
      //   onClick: props.handleClick,
      //   color: 'blue',
      //   content: 'Like',
      //   icon: 'thumbs up',
      //   label: {
      //     basic: true,
      //     color: 'blue',
      //     pointing: 'left',
      //     content: props.count
      //   }
      // }
      assign(
        { onClick: props.handleClick },
        likeButtonStyle,
        { label: assign({ content: props.count }, likeLabelStyle) }
      )
    )
  )
);


const likeBoxStyle = {
  margin: '25px'
  // outerWrapper: {
  //   // border: '1px solid magenta',
  //   margin: '10px'
  // }
  // ,
  // title: {
  //   margin: '5px',
  //   fontWeight: 'bold'
  // },
  // count: {
  //   margin: '5px'
  // }
};

const likeButtonStyle = {
  // inverted: true,
  color: 'grey',
  content: 'Like',
  icon: 'thumbs up',
};

const likeLabelStyle = {
  // inverted: true,
  basic: true,
  color: 'grey',
  pointing: 'left'
};

export default Like;
