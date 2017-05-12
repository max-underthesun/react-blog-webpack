import React, { DOM, PropTypes } from 'react';
// import { set, assign, mapValues } from 'lodash/object';
// import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form';

import { Container, Header } from 'semantic-ui-react';

const Form = ({ handleSubmit }) => (
  DOM.div(
    { className: 'meta-box' },
    React.createElement(
      Header,
      { as: 'h3' },
      'Redux Form'
    ),
    DOM.form(
      { className: 'ui form' },
      React.createElement(
        TextField,
        {
          onSubmit: handleSubmit,
          label: 'Title',
          name: 'title'
        }
      ),
      DOM.input(
        { className:'ui button primary', type: 'submit', value: 'Update'}
      )
    )
  )
);

const ReduxForm = reduxForm({ form: 'editPost' })(Form);

class PostEditContainer extends React.Component {
  render() {
    return (
      React.createElement(
        Container,
        { className: 'blog-item-container', text: true },
        DOM.div(
          { className: 'blog-item' },
          React.createElement(
            Header,
            { as: 'h2', className: 'blog-item-header'},
            'Edit Post'
          ),
          React.createElement(
            ReduxForm,
            {}
          )
        )
      )
    );
  }
}

export default PostEditContainer;

const TextField = ({ label, name }) => (
  DOM.div(
    { className: 'ui field' },
    // { className: classNames('ui field', { error }) },
    DOM.label({ htmlFor: name }, label),
    React.createElement(
      Field,
      {
        component: 'input',
        type: 'text',
        className: 'ui input',
        id: name,
        name
      }
    )
  )
);
