import React, { PropTypes } from 'react';

import { Menu } from 'semantic-ui-react';

const Pagination = ({ currentPage, pageNumberClick, pageNumbers }) => {
  const menuItems = [];
  for (let i = 0; i < pageNumbers.length; i++) {
    menuItems.push(
      React.createElement(
        Menu.Item,
        { key: (i).toString(),
          name: pageNumbers[i],
          active: (currentPage === pageNumbers[i]),
          onClick: pageNumberClick
        }
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
