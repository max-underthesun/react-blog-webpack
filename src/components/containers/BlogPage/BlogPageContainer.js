import React from 'react';
import update from 'immutability-helper';
import { bind, map } from 'lodash';
import request from 'superagent';

// import { Grid } from 'semantic-ui-react';

import BlogPage from 'components/views/BlogPage/BlogPage';
// import PaginationContainer from './PaginationContainer';
// import PieChart from 'components/widgets/blog/PieChart';

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };

    this.like = bind(this.like, this);
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

  render() {
    const { items } = this.state;
    return React.createElement(
      BlogPage,
      { items, like: this.like }
    );
  }
}

export default BlogPageContainer;
