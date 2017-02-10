import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';

const About = ({ info }) => (
  React.createElement(
    Container,
    { style: aboutBoxStyle.outerWrapper, text: true },
    info
  )
);

const aboutBoxStyle = {
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

About.propTypes = {
  info: PropTypes.string
};

export default About;
