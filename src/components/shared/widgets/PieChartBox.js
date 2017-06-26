import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header } from 'semantic-ui-react';

import PieChart from './PieChart';

const PieChartBox = (props) => (
  React.createElement(
    Container,
    { className: 'chart-container' },
    React.createElement(
      Header,
      { as: 'h2', className: 'chart-header' },
      'Likes Chart'
    ),
    React.createElement(
      PieChart,
      { columns: props.columns }
    )
  )
);

PieChartBox.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default PieChartBox;
