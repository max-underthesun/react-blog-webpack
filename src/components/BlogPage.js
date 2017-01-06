import React from 'react';
// import update from 'react-addons-update';
import update from 'immutability-helper';
import { bind } from 'lodash/collection';

import { items as staticItems } from 'constants/static/items';

import BlogList from 'components/widgets/blog/List';

// class BlogPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: staticItems };
//   }
//
//   render() {
//     const { items } = this.state;
//
//     return (
//       <BlogList items={items} />
//     );
//   }
// }

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { items };
    this.state = { items: staticItems };

    this.like = bind(this.like, this);
  }

  like(id) {
    const { items } = this.state;
    const index = items.findIndex(function(obj) { return obj.id == id; });
    this.setState({
      items: update(items, {[index]: {meta: {count: {$apply: function(x) {return x + 1;}}}}})
    });
  }

  render() {
    const { items } = this.state;
    return DOM.div(
      null,
      React.createElement(BlogList, { items, like: this.like }),
      React.createElement(
        PieChart,
        // { columns: _.map(items, (item) => ([item.title, item.meta.count])) }
        { columns: map(items, (item) => ([item.title, item.meta.count])) }
      )
    );
  }
}

export default BlogPage;
