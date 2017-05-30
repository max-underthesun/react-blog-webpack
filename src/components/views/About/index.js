import React, { PropTypes } from 'react';

import { Container, Grid } from 'semantic-ui-react';

import Buttons from 'components/layouts/widgets/Buttons';

const About = ({ info }) => (
  React.createElement(
    Grid,
    {},
    React.createElement(Buttons, { goBack: true }),
    React.createElement(
      Grid.Row,
      {},
      React.createElement(
        Container,
        { className: 'blog-item-container', text: true },
        info
      )
    )
  )
);

About.propTypes = {
  info: PropTypes.string
};

export default About;
