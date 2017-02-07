import React, { PropTypes } from 'react';
import { bind } from 'lodash';

import Pagination from 'components/views/BlogPage/Pagination';

class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], activeItem: '1', itemsPaginated: {} };
    this.paginate = bind(this.paginate, this);
    this.handleItemClick = bind(this.handleItemClick, this);
  }

  paginate(newProps) {
    const { items } = newProps;
    let k = 0;
    const paginated = {};

    for (let i = 0; k <= items.length; i++) {
      paginated[(i + 1).toString()] = items.slice(k, k + 2);
      k = k + 2;
    }

    this.setState({ itemsPaginated: paginated });
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  componentWillReceiveProps(newProps) {
    this.paginate(newProps);
  }

  render() {
    const { activeItem, itemsPaginated } = this.state;
    const names = Object.keys(itemsPaginated);
    const { like } = this.props;
    const handleItemClick = this.handleItemClick;

    return React.createElement(
      Pagination,
      { handleItemClick, activeItem, names, like, itemsPaginated }
    );
  }
}

PaginationContainer.propTypes = {
  like: PropTypes.func
};

export default PaginationContainer;
