import React, { DOM, PropTypes } from 'react';

import { dateFormattedMoment, dateFormattedJS } from 'helpers/date';


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
    React.createElement(MetaDate, { title: 'Created', value: createdAt }),
    updatedAt === undefined || React.createElement(
      MetaDate, { title: 'Updated', value: updatedAt }
    )
  )
);

const MetaDate = (props) => (
  DOM.div(
    { style: metaDateStyle.outerWrapper },
    DOM.span({ style: metaDateStyle.title }, `${props.title}: `),
    DOM.span(null, `${props.value}`)
  )
);

const MetaAuthor = (props) => (
  DOM.div(
    { style: metaAuthorStyle },
    DOM.span(null, `${props.value}`)
  )
);

const metaBoxStyle = {
  margin: '15px',
  padding: '10px',
  backgroundColor: '#ddd'
};

const metaAuthorStyle = {
  fontSize: '1em',
  fontWeight: 'bold'
};

const metaDateStyle = {
  outerWrapper: { fontSize: '0.8em' },
  title: { color: 'grey'}
};

export default MetaData;
