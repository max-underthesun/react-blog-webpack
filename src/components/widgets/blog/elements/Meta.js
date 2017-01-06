import { React, DOM, PropTypes } from 'react';
import moment from 'moment';

// import { formatDate } from 'helpers/date';

// const Meta = ({ createdAt, updatedAt, author, likes }) => (
//   <ul>
//     <li>создано: { formatDate(createdAt) }</li>
//     <li>обновлено: { formatDate(updatedAt) }</li>
//     <li>автор: { author }</li>
//     <li>понравилось: { likes }</li>
//   </ul>
// );

class MetaData extends React.Component {
  constructor(props) {
    super();
    this.state = { updatedAt: props.updatedAt };
  }

  render() {
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

function dateFormattedMoment(
  dateStringISO,
  format = 'MMMM Do YYYY, h:mm:ss a'
) {
  return moment(dateStringISO).format(format);
}

function dateFormattedJS(
  dateStringISO,
  format = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  },
  locale = 'en-US'
) {
  return new Date(dateStringISO).toLocaleString(locale, format);
}

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
    React.createElement(MetaItem, { title: 'Author', value: author }),
    React.createElement(MetaItem, { title: 'Created', value: createdAt }),
    React.createElement(MetaItem, { title: 'Updated', value: updatedAt })
  )
);

const MetaItem = (props) => (
  DOM.p(
    { style: metaItemStyle.outerWrapper },
    DOM.span({ style: metaItemStyle.title }, `${props.title}: `),
    DOM.span(null, `${props.value}`)
  )
);

const metaBoxStyle = {
  border: '2px solid blue',
  margin: '10px'
};

const metaItemStyle = {
  outerWrapper: { margin: '10px'},
  title: { color: 'grey'}
};

// export default Meta;
export default MetaData;
