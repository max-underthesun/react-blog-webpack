import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';

const About = ({ info }) => (
  React.createElement(
    Container,
    { className: 'blog-item-container', text: true },
    info
  )
);

About.propTypes = {
  info: PropTypes.string
};

export default About;
