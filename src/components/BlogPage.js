import React, { DOM } from 'react';
import update from 'immutability-helper';
import { bind, map } from 'lodash';
import request from 'superagent';

import { Grid, Container } from 'semantic-ui-react';

// import { items as staticItems } from 'constants/static/items';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { items: staticItems };
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
        {[index]: { meta: { count: { $apply(x) { return x + 1; } } } } }
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
      Grid,
      { divided: 'vertically' },
      React.createElement(
        Grid.Row,
        { columns: 2 },
        React.createElement(
          Grid.Column,
          { width: 10 },
          React.createElement(BlogList, { items, like: this.like })
        ),
        React.createElement(
          Grid.Column,
          { width: 6 },
          React.createElement(
            PieChart,
            { columns: map(items, (item) => ([item.title, item.meta.count])) }
          )
        )
      )
    );
    // return DOM.div(
    //   {},
    //   React.createElement(BlogList, { items, like: this.like }),
    //   React.createElement(
    //     PieChart,
    //     { columns: map(items, (item) => ([item.title, item.meta.count])) }
    //   )
    // );
  }
}

export default BlogPage;
