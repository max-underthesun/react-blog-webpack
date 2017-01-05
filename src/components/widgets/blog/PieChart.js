import React from 'react';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      // bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: "pie"
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
    return DOM.div({ ref: 'chart' });
    // return DOM.div({ id: 'chart' });
  }
}

export default PieChart;
