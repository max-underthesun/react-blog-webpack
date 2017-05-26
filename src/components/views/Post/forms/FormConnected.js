import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import Form from './Form';

const validate = (values) => {
  const errors = {};
  console.log(values);

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

const ReduxForm = reduxForm(
  // { form: 'editPost', validate, warn, onSubmit }
  { form: 'editPost', validate, warn, onSubmit: submit }
)(Form);

const stateToProps = (state) => ({
  initialValues: {
    title: state.post.entry.title,
    text: state.post.entry.text.post
  }
});

const FormConnected = connect(stateToProps)(ReduxForm);

export default FormConnected;
