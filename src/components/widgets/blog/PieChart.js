import React, { DOM, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import c3 from 'c3';
import { Container, Header } from 'semantic-ui-react';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      // bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: 'pie'
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.chart.load({ columns: newProps.columns });
  }

  render() {
    // return DOM.div({ ref: 'chart' });
    // return DOM.div({ id: 'chart' });
    return React.createElement(
      Container,
      { style: chartContainerStyle, text: true },
      React.createElement(
        Header,
        { as: 'h2', style: headerStyle },
        'Likes Chart'
      ),
      DOM.div({ ref: 'chart', style: chartDivStyle })
    );
    // return React.createElement(
    //   PieCartBox,
    //   { ref: 'chart' }
    // );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array,
};

// const PieCartBox = ({ ref }) => (
//   React.createElement(
//     Container,
//     { style: chartContainerStyle, text: true },
//     React.createElement(
//       Header,
//       { as: 'h2', style: headerStyle },
//       'Likes Chart'
//     ),
//     DOM.div({ ref, style: chartDivStyle })
//   )
// );

const headerStyle = {
  margin: '25px',
  marginTop: '30px',
  color: '#444',
};

const chartContainerStyle = {
  backgroundColor: '#888',
  padding: '15px'
};

const chartDivStyle = {
  backgroundColor: '#bbb',
  margin: '25px'
};

export default PieChart;
