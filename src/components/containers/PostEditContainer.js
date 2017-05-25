import React, { DOM, PropTypes } from 'react';
import { set, assign, mapValues } from 'lodash/object';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Container, Header } from 'semantic-ui-react';

const validate = (values) => {
  const errors = {};

  if (values.title.length < 5) {
    errors.title = 'Title length have to be longer than 5 characters';
  }

  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.title.length >= 15) {
    warnings.title = 'Recommended title length is less than 15 characters';
  }

  return warnings;
};

const onSubmit = (values) => alert(JSON.stringify(values));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const submit = (values) => {
  return sleep(1000).then(() => {
    if (values.title.length >= 20) {
      throw new SubmissionError(
        {title: 'Title have to be less than 20 characters'}
      );
    } else {
      onSubmit(values);
    }
  });
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  DOM.div(
    { className: classNames('ui field', { error }) },
    DOM.label({}, label),
    DOM.input({ ...input, type, className: 'ui input' }),
    // DOM.input(assign({}, input, { type, className: 'ui input' })),
    // DOM.input(assign({ type, className: 'ui input' }, input)),
    touched && (
      error && DOM.div({ className: 'ui red label' }, error)
    ) || (
      warning && DOM.div({ className: 'ui yellow label' }, warning)
    )
  )
);

const renderTextArea = ({ input, label, type, meta: { touched, error, warning } }) => (
  DOM.div(
    { className: classNames('ui field', { error }) },
    DOM.label({}, label),
    DOM.textarea(assign({ type, className: 'ui input' }, input)),
    touched && (
      error && DOM.div({ className: 'ui red label' }, error)
    ) || (
      warning && DOM.div({ className: 'ui yellow label' }, warning)
    )
  )
);

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div className={classNames('ui field', { error })}>
//     <label>{label}</label>
//     <input className='ui input' {...input} type={type} />
//     {touched && (error && (
//       <div className='ui red label'>{error}</div>
//     ))}
//   </div>
// );


// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   React.createElement(
//     'div',
//     { className: classNames('ui field', { error }) },
//     React.createElement('label', {}, label),
//     React.createElement('input', { ...input, type }),
//     touched && error && React.createElement('div', { className: 'ui red label' }, error)
//   )
// );

const Form = ({ handleSubmit, pristine, submitting, reset }) => (
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
        Field,
        {
          label: 'Title',
          component: renderField,
          type: 'text',
          // className: 'ui input',
          // id: name,
          name: 'title'
        }
      ),
      // React.createElement(
      //   TextField,
      //   {
      //     label: 'Title',
      //     name: 'title'
      //   }
      // ),
      // React.createElement(
      //   TextField,
      //   {
      //     label: 'Author',
      //     name: 'author'
      //   }
      // ),
      // React.createElement(
      //   TextAreaField,
      //   {
      //     label: 'Text',
      //     name: 'text'
      //   }
      // ),
      React.createElement(
        Field,
        {
          label: 'Text',
          component: renderTextArea,
          // className: 'ui input',
          // id: name,
          name: 'text'
        }
      ),
      (!pristine && !submitting) && DOM.button(
        { className:'ui button', onClick: reset }, 'Clear'
      ),
      DOM.input(
        { className:'ui button primary', type: 'submit', value: 'Update'}
      )
    )
  )
);

// const onSubmit = (values) => alert(JSON.stringify(values));

// const ReduxForm = reduxForm({ form: 'editPost', onSubmit })(Form);
const ReduxForm = reduxForm(
  { form: 'editPost', validate, warn, onSubmit: submit }
)(Form);

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

// const TextField = ({ label, name }) => (
//   React.createElement(
//     Field,
//     {
//       label,
//       component: renderField,
//       type: 'text',
//       className: 'ui input',
//       id: name,
//       name
//     }
//   )
// );

// const TextField = ({ label, name }) => (
//   DOM.div(
//     { className: 'ui field' },
//     // { className: classNames('ui field', { error }) },
//     DOM.label({ htmlFor: name }, label),
//     React.createElement(
//       Field,
//       {
//         component: 'input',
//         type: 'text',
//         className: 'ui input',
//         id: name,
//         name
//       }
//     )
//   )
// );

// const TextAreaField = ({ label, name }) => (
//   DOM.div(
//     { className: 'ui field' },
//     // { className: classNames('ui field', { error }) },
//     DOM.label({ htmlFor: name }, label),
//     React.createElement(
//       Field,
//       {
//         component: 'textarea',
//         className: 'ui textarea',
//         id: name,
//         name
//       }
//     )
//   )
// );
