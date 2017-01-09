import React, { DOM, PropTypes } from 'react';
// import moment from 'moment';

import { dateFormattedMoment, dateFormattedJS } from 'helpers/date';


class MetaData extends React.Component {
  constructor(props) {
    super();
    this.state = { updatedAt: props.updatedAt };
  }

  render() {
    // console.log(this.state.updatedAt);
    return React.createElement(
      MetaBox,
      {
        author: this.props.author,
        createdAt: dateFormattedMoment(this.props.createdAt),
        updatedAt: dateFormattedJS(this.state.updatedAt)
      }
    );
  }
}

// function dateFormattedMoment(
//   dateStringISO,
//   format = 'MMMM Do YYYY, h:mm:ss a'
// ) {
//   return moment(dateStringISO).format(format);
// }
//
// function dateFormattedJS(
//   dateStringISO,
//   format = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
//   },
//   locale = 'en-US'
// ) {
//   return (
//     dateStringISO  && new Date(dateStringISO).toLocaleString(locale, format)
//   );
// }

MetaData.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string
};

MetaData.defaultProps = {
  author: '** anonimus **'
};

const MetaBox = ({ author, createdAt, updatedAt }) => (
  DOM.div(
    { style: metaBoxStyle },
    React.createElement(MetaAuthor, { value: author }),
    React.createElement(MetaItem, { title: 'Created', value: createdAt }),
    // !isEmpty(updatedAt) && React.createElement(
    updatedAt === undefined || React.createElement(
      MetaItem, { title: 'Updated', value: updatedAt }
    )
  )
);

const MetaItem = (props) => (
  DOM.div(
    { style: metaItemStyle.outerWrapper },
    DOM.span({ style: metaItemStyle.title }, `${props.title}: `),
    DOM.span(null, `${props.value}`)
  )
);

const MetaAuthor = (props) => (
  DOM.div(
    { style: { fontSize: '1em', fontWeight: 'bold' } },
    // DOM.span({ style: metaItemStyle.title }, `${props.title}: `),
    DOM.span(
      { style: {} },
      `${props.value}`
    )
  )
);

const metaBoxStyle = {
  // border: '2px solid blue',
  margin: '15px'
};

const metaItemStyle = {
  // outerWrapper: { margin: '10px', fontSize: '0.8em'},
  outerWrapper: { fontSize: '0.8em' },
  title: { color: 'grey'}
};

export default MetaData;
