import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import EmailInputField from 'components/inputs/EmailInputField';
import PasswordInputField from 'components/inputs/PasswordInputField';
import styles from './styles.scss';

const CreateAccountForm = ({ handleSubmit }) => (
  <form styleName="form" onSubmit={handleSubmit}>
    <div styleName="title">Create account</div>
    <div styleName="fields">
      <Field name="email" component={EmailInputField} isWhite />
      <Field name="password" component={PasswordInputField} />
    </div>
  </form>
);

CreateAccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(10, 'Minimal length is 10')
      .required('Password is required'),
  }),
  displayName: 'CreateAccountForm',
})(
  CSSModules(styles)(CreateAccountForm),
);
