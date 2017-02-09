import React, { PropTypes } from 'react';

import { Menu } from 'semantic-ui-react';

const Pagination = ({ activeItem, pageNumberClick, pageNumbers }) => {
  const menuItems = [];
  for (let i = 0; i < pageNumbers.length; i++) {
    menuItems.push(
      React.createElement(
        Menu.Item,
        { key: (i).toString(),
          name: pageNumbers[i],
          active: (activeItem === pageNumbers[i]),
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
  activeItem: PropTypes.string,
  pageNumberClick: PropTypes.func,
  pageNumbers: PropTypes.array
};

export default Pagination;
