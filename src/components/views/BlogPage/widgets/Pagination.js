import React, { PropTypes } from 'react';

import { Menu } from 'semantic-ui-react';

// import BlogList from './List';

const Pagination = ({ activeItem, pageNumberClick, pageNumbers }) => {
  const menuItems = [];
  for (let i = 0; i < pageNumbers.length; i++) {
    menuItems.push(
      React.createElement(
        Menu.Item,
        { key: (i).toString(),
          // name: `${i + 1}`,
          name: pageNumbers[i],
          active: (activeItem === pageNumbers[i]),
          onClick: pageNumberClick
        }
      )
    );
  }

  return React.createElement(
    // Grid.Column,
    // { width: 10 },
    // React.createElement(
      Menu,
      { pagination: true },
      menuItems
    // )
    // React.createElement(
    //   BlogList, { items: itemsPaginated[activeItem], like }
    // )
  );
};

Pagination.propTypes = {
  activeItem: PropTypes.string,
  pageNumberClick: PropTypes.func,
  pageNumbers: PropTypes.array
  // like: PropTypes.func,
  // itemsPaginated: PropTypes.object
};

export default Pagination;
