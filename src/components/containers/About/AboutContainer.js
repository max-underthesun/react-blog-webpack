import React from 'react';
import { Container } from 'semantic-ui-react';
import request from 'superagent';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  componentDidMount() {
    this.fetchAbout();
  }

  fetchAbout() {
    request.get(
      'http://localhost:3001/about',
      {},
      (err, res) => this.setState({ info: res.body })
    );
  }

  render() {
    const { info } = this.state;
    return React.createElement(
      Container,
      { style: blogItemStyle.outerWrapper, text: true },
      info
    );
  }
}

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
