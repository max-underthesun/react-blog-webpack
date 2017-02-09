import React, { PropTypes } from 'react';

import { Container, Header } from 'semantic-ui-react';

import PieChart from './PieChart';

const PieChartBox = (props) => (
  React.createElement(
    Container,
    { style: chartContainerStyle },
    React.createElement(
      Header,
      { as: 'h2', style: headerStyle },
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


const headerStyle = {
  margin: '25px',
  marginTop: '30px',
  color: '#444',
};

const chartContainerStyle = {
  margin: '10px',
  backgroundColor: '#888',
  padding: '15px'
};

export default PieChartBox;
