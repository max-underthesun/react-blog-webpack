import React from 'react';
import update from 'immutability-helper';
import { bind, map } from 'lodash';
import request from 'superagent';

import { Grid, Menu } from 'semantic-ui-react';

// import { items as staticItems } from 'constants/static/items';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { items: staticItems };
    // this.state = { items: [], activeItem: '1' };
    this.state = { items: [] };

    this.like = bind(this.like, this);
    // this.handleItemClick = bind(this.handleItemClick, this);
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

  // handleItemClick(e, { name }) {
  //   this.setState({ activeItem: name });
  // }
  //
  render() {
    const { items } = this.state;
    // const { activeItem } = this.state;
    return React.createElement(
      Grid,
      { divided: 'vertically' },
      React.createElement(
        Grid.Row,
        { columns: 2 },
        React.createElement(
          // Grid.Column,
          // { width: 10 },
          // React.createElement(
          //   PaginationMenu,
          //   { handleItemClick: this.handleItemClick, activeItem }
          // ),
          // React.createElement(BlogList, { items, like: this.like })
          // React.createElement(
            Pagination,
            { items, like: this.like }
          // )
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

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { items: [], activeItem: '1', itemsPaginated: {} };
    this.paginate = bind(this.paginate, this);
    this.handleItemClick = bind(this.handleItemClick, this);
  }

  paginate(newProps) {
    // const { items, page } = newProps;
    const { items } = newProps;
    let k = 0;
    const j = {};

    for (let i = 0; k <= items.length; i++) {
      j[(i + 1).toString()] = items.slice(k, k + 2);
      k = k + 2;
    }

    this.setState({ itemsPaginated: j });
  }

  handleItemClick(e, { name }) {
    // console.log(name);
    this.setState({ activeItem: name });
  }

  componentWillReceiveProps(newProps) {
    this.paginate(newProps);
    // this.setState({ items: newProps.items });
  }

  render() {
    // const { pageItems } = this.state;
    const { activeItem } = this.state;
    const { itemsPaginated } = this.state;
    const names = Object.keys(itemsPaginated);
    // console.log(pageItems);
    const { like } = this.props;

    return React.createElement(
      Grid.Column,
      { width: 10 },
      React.createElement(
        PaginationMenu,
        { handleItemClick: this.handleItemClick, activeItem, names }
      ),
      React.createElement(
        BlogList, { items: itemsPaginated[activeItem], like }
      )
    );
  }
}

// class PaginationMenu extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   //
//   render() {
//     const menuItems = [];
//     const { activeItem, handleItemClick, names } = this.props;
//     for (let i = 0; i < names.length; i++) {
//       menuItems.push(
//         React.createElement(
//           Menu.Item,
//           {
//             name: `${i + 1}`,
//             active: (activeItem === `${i + 1}`),
//             onClick: handleItemClick
//           }
//         )
//       );
//     }
//
//     return React.createElement(
//       Menu,
//       { pagination: true },
//       menuItems
//     );
//   }
// }

const PaginationMenu = ({ activeItem, handleItemClick, names }) => {
  const menuItems = [];
  // const { activeItem, handleItemClick, names } = this.props;
  for (let i = 0; i < names.length; i++) {
    menuItems.push(
      React.createElement(
        Menu.Item,
        {
          name: `${i + 1}`,
          active: (activeItem === `${i + 1}`),
          onClick: handleItemClick
        }
      )
    );
  }

  return React.createElement(
    Menu,
    { pagination: true },
    menuItems
  );
  // }
  // React.createElement(
  //   Menu,
  //   { pagination: true },
  //   React.createElement(
  //     Menu.Item,
  //     { name: '1', active: (activeItem === '1'), onClick: handleItemClick }
  //   ),
  //   React.createElement(
  //     Menu.Item,
  //     { name: '2', active: (activeItem === '2'), onClick: handleItemClick }
  //   )
  // )
};

export default BlogPage;
