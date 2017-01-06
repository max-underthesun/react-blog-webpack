import React, { DOM } from 'react';
import update from 'immutability-helper';
import { bind, map } from 'lodash';

import { items as staticItems } from 'constants/static/items';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

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
      // items: update(
      //   items,
      //   {[index]: {meta: {count: {$apply: function(x) {return x + 1;}}}}}
      // )
      items: update(
        items,
        {[index]: {meta: {count: {$apply(x) {return x + 1;}}}}}
      )
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
