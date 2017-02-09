import React from 'react';
import update from 'immutability-helper';
import { bind } from 'lodash';
import request from 'superagent';

import BlogPage from 'components/views/BlogPage/BlogPage';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], activeItem: '1', itemsPaginated: {} };

    this.like = bind(this.like, this);
    this.pageNumberClick = bind(this.pageNumberClick, this);
    this.paginate = bind(this.paginate, this);
  }

  componentDidMount() {
    this.fetchPosts();

    // console.log(this.state);

    // this.paginate();
  }

  // componentDidUpdate() {
  //   this.paginate();
  // }

  like(id) {
    const { items } = this.state;
    // const { itemsPaginated } = this.state;
    // const items = itemsPaginated[this.state.activeItem];
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
      (err, res) => this.setState(
        {
          items: res.body,
          // itemsPaginated: this.paginate(res.body)
        }
      )
    );

    // console.log(this.state);
    // this.paginate();
  }

  paginate(items) {
  // paginate() {
  //   const { items } = this.state;
    let k = 0;
    const paginated = {};

    for (let i = 0; k <= items.length; i++) {
      paginated[(i + 1).toString()] = items.slice(k, k + 2);
      k = k + 2;
    }

    return paginated;
    // this.setState({ itemsPaginated: paginated });
  }

  pageNumberClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    // const { items, activeItem, itemsPaginated } = this.state;
    const { items, activeItem } = this.state;
    const itemsPaginated = this.paginate(items);
    const pageNumbers = Object.keys(itemsPaginated);
    // const pageNumbers = ['1', '2'];
    // const pageNumbersNum = [1, 2];
    // console.log(pageNumbers);
    return React.createElement(
      BlogPage,
      {
        items,
        like: this.like,
        pageNumberClick: this.pageNumberClick,
        activeItem,
        itemsCurrent: itemsPaginated[activeItem],
        // // itemsPaginated: items.slice(0, 2),
        // itemsPaginated: items.slice(+activeItem, +activeItem + 1),
        pageNumbers
      }
    );
  }
}

export default BlogPageContainer;
