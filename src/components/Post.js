import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';
// import { find } from 'lodash';
import request from 'superagent';

// import { items as staticItems } from 'constants/static/items';
import BlogItem from 'components/widgets/blog/Item';

// const Post = ({ params }) => (
//   React.createElement(
//     Item.Group,
//     {},
//     React.createElement(
//       BlogItem,
//       find(staticItems, function(item) { return item.id == params.id; })
//     )
//   )
// );

class Post extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { items: staticItems };
    // this.state = { item: {} };
    this.state = { item: false };

    // this.like = bind(this.like, this);
  }

  componentDidMount() {
    console.log("MOUNTED");
    this.fetchPost();
  }

  // like(id) {
  //   const { items } = this.state;
  //   const index = items.findIndex(function(obj) { return obj.id == id; });
  //   this.setState({
  //     items: update(
  //       items,
  //       // {[index]: {meta: {count: {$apply: function(x) {return x + 1;}}}}}
  //       {[index]: { meta: { count: { $apply(x) { return x + 1; } } } } }
  //     )
  //   });
  // }
  //
  fetchPost() {
    const id = this.props.params.id;
    console.log(id);

    request.get(
      `http://localhost:3001/posts/${id}`,
      {},
      (err, res) => this.setState({ item: res.body })
    );
  }

  render() {
    // const { items } = this.state;
    // const id = this.props.params.id;
    const { item } = this.state;
    console.log(item);
    return React.createElement(
      Item.Group,
      {},
      React.createElement(
        BlogItem,
        item
        // find(staticItems, function(item) { return item.id == params.id; })
        // find(items, function(item) { return item.id == id; })
      )
    );
  }
}


Post.propTypes = {
  params: PropTypes.object
};

export default Post;
