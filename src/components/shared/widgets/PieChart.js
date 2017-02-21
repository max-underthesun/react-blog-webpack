import React, { DOM, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import c3 from 'c3';
import 'c3/c3.css';

class PieChartContainer extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
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
    return DOM.div({ ref: 'chart', className: 'chart-inner-container' });
  }
}

PieChartContainer.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default PieChartContainer;
