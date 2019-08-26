import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';
import { TextInput } from '@components/form';
import API from '@utils/api';

import validationSchema from './schema';
import AuthActions from '@redux/AuthRedux';

class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  handleSubmit = async (values, actions) => {
    const { onSubmit } = this.props;
    const { setSubmitting, setErrors } = actions;
    setSubmitting(true);

    try {
      const result = await API.loginWithEmail(values);
      setSubmitting(false);
      onSubmit(result);
    } catch (err) {
      const errors = {
        password: 'Password is wrong'
      };
      setErrors(errors);
    }
    setSubmitting(false);
  };

  renderForm = ({ isValid, isSubmitting }) => {
    return (
      <Form>
        <Field
          component={TextInput}
          name="email"
          type="email"
          size="large"
          placeholder="Email"
        />
        <Field
          component={TextInput}
          name="password"
          type="password"
          size="large"
          placeholder="Password"
        />
        <Button
          type="primary"
          htmlType="submit"
          disabled={!isValid || isSubmitting}
        >
          LOGIN
        </Button>
      </Form>
    );
  };

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
        render={this.renderForm}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: token => dispatch(AuthActions.setLoggedIn(token))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
