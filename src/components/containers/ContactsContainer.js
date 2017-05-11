import React, { DOM, PropTypes } from 'react';
import { set, assign, mapValues } from 'lodash/object';
import classNames from 'classnames';

import { Container, Header } from 'semantic-ui-react';


class ContactsContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   form: {
  //   //     values: {
  //   //       fullName: '',
  //   //       email: '',
  //   //       message: ''
  //   //     }
  //   //   }
  //   // };
  //   // this.form = {};
  //
  //   // this.onSubmit = this.onSubmit.bind(this);
  //   // this.generateRef = this.generateRef.bind(this);
  // }

  // componentDidMount() {
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.setState({ errors: {} });
  //
  //   const values = mapValues(this.form, 'value');
  //
  //   if (!values.email || values.email.length < 3) {
  //     this.setState(
  //       assign(
  //         {},
  //         this.state,
  //         { errors: assign({}, this.state.errors, { email: true }) }
  //       )
  //     );
  //   }
  //
  //   alert(JSON.stringify(values));
  // }
  //
  // generateRef(fieldName) {
  //   return (input) => { this.form[fieldName] = input; };
  // }

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
            'Contacts'
          ),
          React.createElement(
            ControlledForm
          )
          // ,
          // React.createElement(
          //   UncontrolledForm
          // )
        )
      )
    );
  }
}

export default ContactsContainer;


class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };
    // this.form = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    // this.setState({ errors: {} });
    //
    // const values = mapValues(this.form, 'value');
    //
    // if (!values.email || values.email.length < 3) {
    //   this.setState(
    //     assign(
    //       {},
    //       this.state,
    //       { errors: assign({}, this.state.errors, { email: true }) }
    //     )
    //   );
    // }

    // alert(JSON.stringify(values));
    alert(JSON.stringify(this.state.form.values));
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email': {
          // this.clearError('email');
          this.setErrorStatus('email', false);
          if (!e.target.value || e.target.value.length < 3) {
            this.setErrorStatus('email', true);
            // this.setState(
            //   set(
            //     assign({}, this.state),
            //     ['form','errors', 'email'],
            //     true
            //   )
            // );
          }
          break;
        }
      }

      this.setState(
        set(
          assign({}, this.state),
          ['form','values', fieldName],
          e.target.value
        )
      );
    };
  }

  setErrorStatus(fieldName, status) {
    this.setState(
      set(
        assign({}, this.state),
        ['form','errors', fieldName],
        status
      )
    );
  }

  // clearError(fieldName) {
  //   this.setState(
  //     set(
  //       assign({}, this.state),
  //       ['form','errors', fieldName],
  //       false
  //     )
  //   );
  // }

  // generateRef(fieldName) {
  //   return (input) => { this.form[fieldName] = input; };
  // }

  render() {
    const { fullName, email, message } = this.state.form.values;

    return (
      DOM.div(
        { className: 'meta-box' },
        React.createElement(
          Header,
          { as: 'h3' },
          'Controlled Form'
        ),
        DOM.form(
          {
            onSubmit: this.onSubmit,
            className: 'ui form'
          },
          React.createElement(
            TextControlled,
            {
              label: 'Full name',
              name: 'fullName',
              value: fullName,
              onChange: this.handleChange('fullName')
            }
          ),
          React.createElement(
            TextControlled,
            {
              label: 'Email',
              name: 'email',
              value: email,
              error: this.state.form.errors.email,
              onChange: this.handleChange('email')
            }
          ),
          React.createElement(
            TextAreaControlled,
            {
              label: 'Message',
              name: 'message',
              value: message,
              // error: this.state.errors.email,
              onChange: this.handleChange('message')
            }
          ),
          // React.createElement(
          //   TextArea,
          //   {
          //     label: 'Message',
          //     name: 'message',
          //     fieldRef: this.generateRef('message')
          //   }
          // ),
          DOM.input(
            { className:'ui button primary', type: 'submit', value: 'Submit'}
          )
        )
      )
    );
  }
}

const TextControlled = ({ label, name, value, onChange, error }) => (
  DOM.div(
    // { className: 'ui field' },
    { className: classNames('ui field', { error }) },
    DOM.label(
      { htmlFor: name },
      label
    ),
    DOM.input(
      {
        type: 'text',
        className: 'ui input',
        value,
        id: name,
        name,
        onChange
      }
    )
  )
);

const TextAreaControlled = ({ label, name, value, onChange, error }) => (
  DOM.div(
    // { className: 'ui field' },
    { className: classNames('ui field', { error }) },
    DOM.label(
      { htmlFor: name },
      label
    ),
    DOM.textarea(
      {
        className: 'ui textarea',
        value,
        id: name,
        name,
        onChange
      }
    )
  )
);


// class TextControlled extends React.Component {
//   render() {
//     const { label, name, value, onChange, error } = this.props;
//
//     return (
//       DOM.div(
//         { className: 'ui field' },
//         // { className: classNames('ui field', { error }) },
//         DOM.label(
//           { for: name },
//           label
//         ),
//         DOM.input(
//           {
//             type: 'text',
//             className: 'ui input',
//             value,
//             id: name,
//             name,
//             onChange
//           }
//         )
//       )
//     );
//   }
// }

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: {} };
    this.form = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {} });

    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.length < 3) {
      this.setState(
        assign(
          {},
          this.state,
          { errors: assign({}, this.state.errors, { email: true }) }
        )
      );
    }

    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      DOM.div(
        { className: 'meta-box' },
        React.createElement(
          Header,
          { as: 'h3' },
          'Uncontrolled Form'
        ),
        DOM.form(
          {
            onSubmit: this.onSubmit,
            className: 'ui form'
          },
          React.createElement(
            Text,
            {
              label: 'Full name',
              name: 'fullName',
              fieldRef: this.generateRef('fullName')
            }
          ),
          React.createElement(
            Text,
            {
              label: 'Email',
              name: 'email',
              error: this.state.errors.email,
              fieldRef: this.generateRef('email')
            }
          ),
          React.createElement(
            TextArea,
            {
              label: 'Message',
              name: 'message',
              fieldRef: this.generateRef('message')
            }
          ),
          DOM.input(
            { className:'ui button primary', type: 'submit', value: 'Submit'}
          )
        )
      )
    );
  }
}

class Text extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      DOM.div(
        // { className: 'ui field' },
        { className: classNames('ui field', { error }) },
        DOM.label(
          { htmlFor: name },
          label
        ),
        DOM.input(
          {
            type: 'text',
            ref: fieldRef,
            className: 'ui input',
            id: name,
            name
          }
        )
      )
    );
  }
}

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;

    return (
      DOM.div(
        { className: 'ui field' },
        DOM.label(
          { htmlFor: name },
          label
        ),
        DOM.textarea(
          {
            ref: fieldRef,
            className: 'ui input',
            id: name,
            name
          }
        )
      )
    );
  }
}

Text.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldRef: PropTypes.func.isRequired,
  error: PropTypes.bool
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldRef: PropTypes.func.isRequired
};
