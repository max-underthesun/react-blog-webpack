import React from 'react';
import { Menu } from 'semantic-ui-react';
// import { bind } from 'lodash';

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
        'ThinknetikaBlog'
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
    )
  )
);

// class PageHeader extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeItem: 'home'};
//     this.handleItemClick = bind(this.handleItemClick, this);
//   }
//
//   handleItemClick(e, { name }) {
//     this.setState({ activeItem: name });
//   }
//
//   render() {
//     const { activeItem } = this.state;
//     return React.createElement(
//       Menu,
//       { inverted: true, size: 'huge', color: 'grey' },
//       React.createElement(
//         Menu.Item,
//         {
//           header: true,
//           name: 'home',
//           active: (activeItem === 'home'),
//           onClick: this.handleItemClick
//         },
//         React.createElement(
//           Link,
//           { to: '/' },
//           'ThinknetikaBlog'
//         )
//       ),
//       React.createElement(
//         Menu.Item,
//         {
//           name: 'about',
//           active: (activeItem === 'about'),
//           color: 'green',
//           onClick: this.handleItemClick
//         },
//         React.createElement(
//           Link,
//           { to: '/about' },
//           'About'
//         )
//       )
//     );
//   }
// }

export default PageHeader;
