import React, { PropTypes } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

import Link from 'components/elements/Link';

const MainLayout = ({ children }) => (
  React.createElement(
    Container,
    {},
    React.createElement(Logo),
    children,
    React.createElement(Footer)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

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
