import React, { PropTypes, DOM } from 'react';
import { Button, Segment, Container, Header, Grid } from 'semantic-ui-react';

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
  React.createElement(
    Button,
    { onClick: () => history.goBack(), inverted: true, color: 'orange' },
    'Back'
  )
  // React.createElement(
  //   Grid,
  //   {},
  //   React.createElement(
  //     Grid.Row,
  //     {},
  //     React.createElement(
  //       Grid.Column,
  //       {},
  //       React.createElement(
  //         Button,
  //         { onClick: () => history.goBack() },
  //         'Back'
  //       )
  //     )
  //   )
  // )
);

const Logo = () => (
  React.createElement(
    Segment,
    {},
    React.createElement(
      Header,
      { as: 'h2'},
      React.createElement(
        Link,
        { to: '/' },
        'ThinknetikaBlog'
      )
    )
  )
);

const Footer = () => (
  React.createElement(
    Segment,
    {},
    'Powered By React Course.'
  )
);

export default MainLayout;
