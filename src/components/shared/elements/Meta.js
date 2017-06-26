import React, { DOM } from 'react';
import PropTypes from 'prop-types';

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
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

MetaData.defaultProps = {
  author: '** anonimus **'
};

const MetaBox = ({ author, createdAt, updatedAt }) => (
  DOM.div(
    { className: 'meta-box' },
    React.createElement(MetaAuthor, { value: author }),
    React.createElement(MetaDate, { title: 'Created', value: createdAt }),
    updatedAt && React.createElement(
      MetaDate, { title: 'Updated', value: updatedAt }
    )
  )
);

const MetaDate = (props) => (
  DOM.div(
    { className: 'meta-date-box' },
    DOM.span({ className: 'meta-date-title' }, `${props.title}: `),
    DOM.span(null, `${props.value}`)
  )
);

const MetaAuthor = (props) => (
  DOM.div(
    { className: 'meta-author-box' },
    DOM.span(null, `${props.value}`)
  )
);

export default MetaData;
