import React, { PropTypes } from 'react';

import Pagination from 'components/views/BlogPage/widgets/Pagination';

class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeItem, pageNumbers, pageNumberClick } = this.props;

    return React.createElement(
      Pagination,
      { pageNumberClick, activeItem, pageNumbers }
    );
  }
}

PaginationContainer.propTypes = {
  like: PropTypes.func
};

export default PaginationContainer;
