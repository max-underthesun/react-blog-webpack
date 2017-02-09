import React from 'react';

import request from 'superagent';

import About from 'components/views/About/About';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: '' };
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
    return React.createElement(About, { info });
  }
}

export default AboutContainer;
