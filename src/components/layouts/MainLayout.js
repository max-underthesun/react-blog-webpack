import React, { PropTypes } from 'react';
import { Button, Segment, Container, Header } from 'semantic-ui-react';

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
    { onClick: () => history.goBack() },
    'Back'
  )
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
