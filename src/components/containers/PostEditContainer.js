import React, { DOM, PropTypes } from 'react';
import { set, assign, mapValues } from 'lodash/object';
import classNames from 'classnames';

import { Container, Header } from 'semantic-ui-react';


class PostEditContainer extends React.Component {
  render() {
    return (
      React.createElement(
        Container,
        { className: 'blog-item-container', text: true },
        DOM.div(
          { className: 'blog-item' },
          React.createElement(
            Header,
            { as: 'h2', className: 'blog-item-header'},
            'Edit Post'
          )
        )
      )
    );
  }
}

export default PostEditContainer;
