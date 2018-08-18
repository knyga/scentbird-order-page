import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import cardValidator from 'card-validator';
import InputField from 'components/inputs/InputField';
import PasswordInputField from 'components/inputs/PasswordInputField';
import SelectField from 'components/inputs/SelectField';
import styles from './styles.scss';

// TODO move to consts or read from api
const months = [{ value: 1, label: 'Jan' }, { value: 2, label: 'Feb' }, { value: 3, label: 'March' },
  { value: 4, label: 'Apr' }, { value: 5, label: 'Mar' }, { value: 6, label: 'Jun' }, { value: 7, label: 'Jul' },
  { value: 8, label: 'Aug' }, { value: 9, label: 'Sep' }, { value: 10, label: 'Oct' }, { value: 11, label: 'Nov' },
  { value: 12, label: 'Dec' }];
const years = [{ value: 2018, label: '2018' }, { value: 2019, label: '2019' }, { value: 2020, label: '2020' },
  { value: 2021, label: '2021' }, { value: 2022, label: '2022' }, { value: 2023, label: '2023' }];

const SecureCreditCardPayment = ({ handleSubmit }) => (
  <form styleName="form" onSubmit={handleSubmit}>
    <div styleName="title">Secure credit card payment</div>
    <div styleName="content">
      <div styleName="info">
        <div styleName="shield">
          <span>128-BIT ENCRYPTION. YOU’RE SAFE</span>
        </div>
        {/* TODO: change color or current card based on card's number entered by user */}
        <div styleName="cards" />
      </div>
      <div styleName="fields__line1">
        <Field
          name="creditcardnumber"
          component={InputField}
          placeholder="Credit card number"
          isWhite
          info="We use 128-bit encryption. You're safe!"
        />
        <Field
          name="securitycode"
          component={PasswordInputField}
          placeholder="Security code"
          isWhite
          info="We use 128-bit encryption. You're safe!"
        />
      </div>
      <div styleName="fields__line2">
        <Field name="month" component={SelectField} options={months} placeholder="Month" isWhite />
        <Field name="year" component={SelectField} options={years} placeholder="Year" isWhite />
        <div styleName="exptext"><span>Exp.</span></div>
      </div>
      <div styleName="fields__line3">
        <Field
          name="securitycode"
          component={PasswordInputField}
          placeholder="Security code"
          isWhite
          info="We use 128-bit encryption. You're safe!"
        />
      </div>
    </div>
  </form>
);
SecureCreditCardPayment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({
    creditcardnumber: '', securitycode: '', month: '', year: '',
  }),
  validationSchema: Yup.object().shape({
    creditcardnumber: Yup.string()
      .test('length', 'Card number should consist of 16 digits', value => /^\d{16}$/.test(value))
      .test('is-card-potentially-valid', 'Card number is not valid', value => cardValidator.number(value).isPotentiallyValid)
      .required('Credit card number is required'),
    securitycode: Yup.string()
      .test('length', 'Security code should consist of 3 digits', value => /^\d{3}$/.test(value))
      .test('111', 'WoW, why?', value => value !== '111')
      .required('Security code is required!'),
    month: Yup.number()
      .typeError('Month should be a number')
      .min(1, 'Can\'t be less then 1')
      .max(12, 'Can\'t be more then 12')
      .required('Exp. month is required'),
    year: Yup.number()
      .typeError('Year should be a number')
      .min(0, 'Can\'t be less then 0')
      .max(99, 'Can\'t be more then 99')
      .required('Exp. year is required'),
  }),
  displayName: 'SecureCreditCardPayment',
})(
  CSSModules(styles)(SecureCreditCardPayment),
);
