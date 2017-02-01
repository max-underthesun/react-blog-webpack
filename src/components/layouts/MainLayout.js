import React, { PropTypes, DOM } from 'react';
import { Button, Segment, Container, Header, Grid, Menu } from 'semantic-ui-react';
import { bind, assign } from 'lodash';

import Link from 'components/elements/Link';
import history from 'helpers/history';

const MainLayout = ({ children }) => (
  React.createElement(
    Container,
    {},
    React.createElement(Logo),
    React.createElement(GoBackButton),
    children,
    React.createElement(Footer)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const GoBackButton = () => (
  // React.createElement(
  //   Button,
  //   { onClick: () => history.goBack(), inverted: true, color: 'orange' },
  //   'Back'
  // )
  React.createElement(
    Grid,
    {},
    React.createElement(
      Grid.Row,
      {},
      React.createElement(
        Grid.Column,
        {},
        React.createElement(
          Button,
          { onClick: () => history.goBack(), inverted: true, color: 'orange', floated: 'right' },
          'Back'
        )
      )
    )
  )
);

const Logo = () => (
// class Logo extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { activeItem: 'home'};
//     // this.handleItemClick = bind(this.handleItemClick, this);
//   }

  // handleItemClick(e, { name }) {
  //   this.setState({ activeItem: name });
  // }

  // render() {
    // const { activeItem } = this.state;
    React.createElement(
      Menu,
      { inverted: true, size: 'huge' },
      React.createElement(
        Menu.Item,
        { header: true },
        // { header: true, name: 'home', active: (activeItem === 'home'), onClick: this.handleItemClick },
        React.createElement(
          Link,
          { to: '/' },
          'ThinknetikaBlog'
        )
      ),
      React.createElement(
        Menu.Item,
        {},
        // { name: 'about', active: (activeItem === 'about'), color: 'green', onClick: this.handleItemClick },
        React.createElement(
          Link,
          { to: '/about' },
          'About'
        )
      )
    )
  // }
// }
  // React.createElement(
  //   Segment,
  //   {},
  //   React.createElement(
  //     Header,
  //     { as: 'h2'},
  //     React.createElement(
  //       Link,
  //       { to: '/' },
  //       'ThinknetikaBlog'
  //     )
  //   )
  // )
);

const Footer = () => (
  React.createElement(
    Segment,
    {},
    'Powered By React Course.'
  )
);

export default MainLayout;
