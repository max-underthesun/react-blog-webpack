import React from 'react';
import update from 'immutability-helper';
import { bind } from 'lodash';
import request from 'superagent';

import { POSTS_PER_PAGE } from 'constants/Pagination';
import BlogPage from 'components/views/BlogPage/BlogPage';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], activeItem: '1' };

    this.like = bind(this.like, this);
    this.pageNumberClick = bind(this.pageNumberClick, this);
    this.paginate = bind(this.paginate, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  like(id) {
    const { items } = this.state;
    const index = items.findIndex(function(obj) { return obj.id == id; });
    this.setState({
      items: update(
        items,
        // {[index]: {meta: {count: {$apply: function(x) {return x + 1;}}}}}
        { [index]: { meta: { count: { $apply(x) { return x + 1; } } } } }
      )
    });
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ items: res.body })
    );
  }

  paginate(items) {
    let k = 0;
    const paginated = {};

    for (let i = 0; k <= items.length; i++) {
      paginated[(i + 1).toString()] = items.slice(k, k + POSTS_PER_PAGE);
      k = k + POSTS_PER_PAGE;
    }

    return paginated;
  }

  pageNumberClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { items, activeItem } = this.state;
    const itemsPaginated = this.paginate(items);
    const pageNumbers = Object.keys(itemsPaginated);
    return React.createElement(
      BlogPage,
      {
        items,
        like: this.like,
        pageNumberClick: this.pageNumberClick,
        activeItem,
        itemsCurrent: itemsPaginated[activeItem],
        pageNumbers
      }
    );
  }
}

export default BlogPageContainer;