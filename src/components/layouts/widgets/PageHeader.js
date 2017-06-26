import React from 'react';
import { Menu } from 'semantic-ui-react';

import Link from 'components/shared/elements/Link';

const PageHeader = () => (
  React.createElement(
    Menu,
    { inverted: true, size: 'huge', color: 'grey' },
    React.createElement(
      Menu.Item,
      { header: true },
      React.createElement(
        Link,
        { to: '/' },
        'ThinkneticaBlog'
      )
    ),
    React.createElement(
      Menu.Item,
      {},
      React.createElement(
        Link,
        { to: '/about' },
        'About'
      )
    ),
    React.createElement(
      Menu.Item,
      {},
      React.createElement(
        Link,
        { to: '/contacts' },
        'Contacts'
      )
    )
  )
);

export default PageHeader;
