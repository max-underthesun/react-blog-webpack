import React, { PropTypes } from 'react';
import { pagePath } from 'helpers/routes';

import { Menu } from 'semantic-ui-react';
import Link from 'components/shared/elements/Link';

const Pagination = ({ currentPage, pageNumbers }) => {
  const menuItems = [];
  for (let i = 0; i < pageNumbers.length; i++) {
    menuItems.push(
      React.createElement(
        Link,
        {
          key: (i).toString(),
          // to: `/?page=${i + 1}`
          to: pagePath(i + 1)
        },
        React.createElement(
          Menu.Item,
          {
            name: pageNumbers[i],
            active: (currentPage === pageNumbers[i]),
          }
        )
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
