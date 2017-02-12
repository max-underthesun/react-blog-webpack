import React, { PropTypes } from 'react';
import request from 'superagent';

import { postsPath } from 'helpers/routes';
import { SERVER_URL } from 'constants/ServerUrl';
import Post from 'components/views/Post/Post';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: false };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    const { id } = this.props.params;
    request.get(
      `${SERVER_URL}${postsPath(id)}`,
      {},
      (err, res) => this.setState({ item: res.body })
    );
  }

  render() {
    const { item } = this.state;
    return React.createElement(Post, { item });
  }
}

PostContainer.propTypes = {
  params: PropTypes.object
};

export default PostContainer;
