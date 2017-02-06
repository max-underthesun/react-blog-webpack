import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
import request from 'superagent';

import BlogItem from 'components/widgets/blog/Item';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: false };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    const id = this.props.params.id;
    request.get(
      `http://localhost:3001/posts/${id}`,
      {},
      (err, res) => this.setState({ item: res.body })
    );
  }

  render() {
    const { item } = this.state;
    return React.createElement(
      Item.Group,
      {},
      React.createElement(
        BlogItem,
        item
      )
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
