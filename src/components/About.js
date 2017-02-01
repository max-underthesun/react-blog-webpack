import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';
// import { find } from 'lodash';
import request from 'superagent';

// import { items as staticItems } from 'constants/static/items';
// import BlogItem from 'components/widgets/blog/Item';

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

class About extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { items: staticItems };
    // this.state = { item: {} };
    this.state = { info: false };

    // this.like = bind(this.like, this);
  }

  componentDidMount() {
    // console.log("MOUNTED");
    this.fetchAbout();
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
  fetchAbout() {
    // const id = this.props.params.id;
    // console.log(id);

    request.get(
      'http://localhost:3001/about',
      {},
      (err, res) => this.setState({ info: res.body })
    );
  }

  render() {
    // const { items } = this.state;
    // const id = this.props.params.id;
    const { info } = this.state;
    // console.log(item);
    return React.createElement(
      Container,
      { style: blogItemStyle.outerWrapper, text: true },
      info
      // Item.Group,
      // {},
      // React.createElement(
      //   BlogItem,
      //   item
      // )
    );
  }
}


// About.propTypes = {
//   params: PropTypes.object
// };
//

const blogItemStyle = {
  outerWrapper: {
    backgroundColor: '#ccc',
    margin: '10px',
    padding: '10px'
  },
  postWrapper: {
    margin: '10px',
    padding: '10px'
  }
};

export default About;
