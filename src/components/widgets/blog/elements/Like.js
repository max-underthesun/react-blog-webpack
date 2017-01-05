import React from 'react';
import { bind } from 'lodash/collection';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(e) {
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
  DOM.span(
    { style: likeBoxStyle.outerWrapper },
    DOM.span({ style: likeBoxStyle.title }, 'Like: '),
    DOM.span({ style: likeBoxStyle.count }, props.count),
    DOM.button({ onClick: props.handleClick }, '+')
  )
);

const likeBoxStyle = {
  outerWrapper: {
    border: '1px solid magenta',
    margin: '10px'
  },
  title: {
    margin: '5px',
    fontWeight: 'bold'
  },
  count: {
    margin: '5px'
  }
};

export default Like;
