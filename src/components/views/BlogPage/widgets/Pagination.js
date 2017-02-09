import React, { PropTypes } from 'react';

import { Menu, Grid } from 'semantic-ui-react';

import BlogList from './List';

const Pagination = (
  { activeItem, handleItemClick, names, like, itemsPaginated }
) => {
  const menuItems = [];
  for (let i = 0; i < names.length; i++) {
    menuItems.push(
      React.createElement(
        Menu.Item,
        { key: (i).toString(),
          name: `${i + 1}`,
          active: (activeItem === `${i + 1}`),
          onClick: handleItemClick
        }
      )
    );
  }

  return React.createElement(
    Grid.Column,
    { width: 10 },
    React.createElement(
      Menu,
      { pagination: true },
      menuItems
    ),
    React.createElement(
      BlogList, { items: itemsPaginated[activeItem], like }
    )
  );
};

Pagination.propTypes = {
  activeItem: PropTypes.string,
  handleItemClick: PropTypes.func,
  names: PropTypes.array,
  like: PropTypes.func,
  itemsPaginated: PropTypes.object
};

export default Pagination;
