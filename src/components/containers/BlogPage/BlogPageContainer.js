import React, { PropTypes } from 'react';
// import update from 'immutability-helper';
import { bind } from 'lodash';
// import request from 'superagent';

import BlogItem from 'components/shared/widgets/BlogItem';
import { addLike } from 'actions/PostsAction';
import { POSTS_PER_PAGE } from 'constants/Pagination';
// import { SERVER_URL } from 'constants/ServerUrl';
import BlogPage from 'components/views/BlogPage';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { items: [], activeItem: '1' };
    this.state = { activeItem: '1' };

    this.like = bind(this.like, this);
    this.pageNumberClick = bind(this.pageNumberClick, this);
    this.paginate = bind(this.paginate, this);
  }

  // componentDidMount() {
  //   this.fetchPosts();
  // }

  like(id) {
    // const { items } = this.state;
    // const index = items.findIndex(function(obj) { return obj.id == id; });
    // this.setState({
    //   items: update(
    //     items,
    //     // {[index]: {meta: {count: {$apply: function(x) {return x + 1;}}}}}
    //     { [index]: { meta: { count: { $apply(x) { return x + 1; } } } } }
    //   )
    // });
    // console.log(this.props);
    const { items, dispatch } = this.props;
    const index = items.findIndex(function(obj) { return obj.id == id; });
    dispatch(addLike(index));
  }

  // fetchPosts() {
  //   request.get(
  //     `${SERVER_URL}`,
  //     {},
  //     (err, res) => this.setState({ items: res.body })
  //   );
  // }

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
    // const { items, activeItem } = this.state;
    const { activeItem } = this.state;
    const { items } = this.props;
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

BlogPageContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(BlogItem.propTypes)),
  dispatch: PropTypes.func
};


export default BlogPageContainer;
