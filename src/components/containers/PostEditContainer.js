import React, { DOM, PropTypes } from 'react';
// import { set, assign, mapValues } from 'lodash/object';
// import classNames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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
      {
        onSubmit: handleSubmit,
        className: 'ui form'
      },
      React.createElement(
        TextField,
        {
          label: 'Title',
          name: 'title'
        }
      ),
      // React.createElement(
      //   TextField,
      //   {
      //     label: 'Author',
      //     name: 'author'
      //   }
      // ),
      React.createElement(
        TextAreaField,
        {
          label: 'Text',
          name: 'text'
        }
      ),
      DOM.input(
        { className:'ui button primary', type: 'submit', value: 'Update'}
      )
    )
  )
);

const onSubmit = (values) => alert(JSON.stringify(values));

const ReduxForm = reduxForm({ form: 'editPost', onSubmit })(Form);

const stateToProps = (state) => ({
  initialValues: {
    title: state.post.entry.title,
    text: state.post.entry.text.post
  }
});

const FormConnected = connect(stateToProps)(ReduxForm);

// const FormConnected = connect(
//   (state) => ({
//     initialValues: {
//       title: state.post.entry.title,
//       text: state.post.entry.text.post
//     }
//   })
// )(
//   reduxForm({
//     form: 'editPost',
//     onSubmit: (values) => alert(JSON.stringify(values))
//   })(Form)
// );

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
            // ReduxForm,
            FormConnected,
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

const TextAreaField = ({ label, name }) => (
  DOM.div(
    { className: 'ui field' },
    // { className: classNames('ui field', { error }) },
    DOM.label({ htmlFor: name }, label),
    React.createElement(
      Field,
      {
        component: 'textarea',
        className: 'ui textarea',
        id: name,
        name
      }
    )
  )
);
