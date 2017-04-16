import React, { PropTypes } from 'react';

import { Menu } from 'semantic-ui-react';
import Link from 'components/shared/elements/Link';

// const Pagination = ({ currentPage, pageNumberClick, pageNumbers }) => {
const Pagination = ({ currentPage, pageNumbers }) => {
  const menuItems = [];
  for (let i = 0; i < pageNumbers.length; i++) {
    menuItems.push(
      React.createElement(
        Link,
        {
          key: (i).toString(),
          to: `/?page=${i + 1}`
        },
        React.createElement(
          Menu.Item,
          {
            name: pageNumbers[i],
            active: (currentPage === pageNumbers[i]),
            // onClick: pageNumberClick,
            // link: true,
            // to: `/?page=${i + 1}`
          }
        )
        // Menu.Item,
        // { key: (i).toString(),
        //   name: pageNumbers[i],
        //   active: (currentPage === pageNumbers[i]),
        //   // onClick: pageNumberClick,
        //   // link: true,
        //   // to: `/?page=${i + 1}`
        // }
        // ,
        // React.createElement(
        //   Link,
        //   { to: `/?page=${i + 1}`},
        //   `${pageNumbers[i]}`
        // )
      )
    );
  }

  return React.createElement(
    Menu,
    { pagination: true },
    menuItems
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.string,
  pageNumberClick: PropTypes.func,
  pageNumbers: PropTypes.arrayOf(PropTypes.string)
};

export default Pagination;
