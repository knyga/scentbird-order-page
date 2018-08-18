import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import InputField from 'components/inputs/InputField';
import SelectField from 'components/inputs/SelectField';
import CheckBoxField from 'components/inputs/CheckBoxField';
import styles from './styles.scss';

// TODO move to consts or read from api
const states = [{ value: 'NYK', label: 'NEW YORK' }, { value: 'CA', label: 'California' }];

@CSSModules(styles)
export class AddressForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    values: PropTypes.instanceOf(Object).isRequired,
  };

  renderAddressBlock(title, prefix) {
    const getName = name => `${prefix}.${name}`;

    return (
      <Fragment>
        <div styleName="title">{title}</div>
        <div styleName="fields">
          <Field name={getName('firstname')} component={InputField} placeholder="First Name" />
          <Field name={getName('lastname')} component={InputField} placeholder="Last Name" />
        </div>
        <div styleName="fields_3to1">
          <Field name={getName('streetname')} component={InputField} placeholder="Street address" />
          <Field name={getName('aptsuite')} component={InputField} placeholder="Apt/Suite (Optional)" />
        </div>
        <div styleName="fields_1to1x3">
          <Field name={getName('zip')} component={InputField} placeholder="ZIP" />
          <Field name={getName('state')} component={SelectField} options={states} />
          <Field name={getName('city')} component={SelectField} options={states} />
        </div>
        <div styleName="fields_single">
          <Field name={getName('country')} component={InputField} disabled />
        </div>
      </Fragment>
    );
  }

  render() {
    const { handleSubmit, values } = this.props;

    return (
      <form styleName="form" onSubmit={handleSubmit}>
        {this.renderAddressBlock('Shipping address', 'shipping')}
        <div styleName="fields">
          <Field name="mobile" component={InputField} placeholder="Mobile number (Optional)" />
          <div styleName="field_text">
            <span>We may send you special discounts and offers</span>
          </div>
        </div>
        <div styleName="fields">
          <Field
            name="billing.isreuse"
            component={CheckBoxField}
            isPink
            label="Use this address as my billing address"
          />
        </div>
        <div styleName="billing">
          {!values.billing.isreuse && this.renderAddressBlock('Billing address', 'billing')}
        </div>
      </form>
    );
  }
}


export default withFormik({
  mapPropsToValues: () =>
    ({
      shipping: {
        firstname: '',
        lastname: '',
        streetname: '',
        aptsuite: '',
        zip: '',
        state: 'NYK',
        city: 'NYK',
        country: 'UNITED STATES',
      },
      billing: {
        isreuse: true,
        firstname: '',
        lastname: '',
        streetname: '',
        aptsuite: '',
        zip: '',
        state: 'NYK',
        city: 'NYK',
        country: 'UNITED STATES',
      },
      mobile: '',
    }),
  validationSchema: (() => {
    const addressBlockValidationSchema = Yup.object().shape({
      firstname: Yup.string()
        .required('First Name is required'),
      lastname: Yup.string()
        .required('Last Name is required'),
      password: Yup.string()
        .required('Last Name is required'),
      streetname: Yup.string()
        .required('Street address is required'),
      zip: Yup.number()
        .typeError('ZIP should be a number')
        .required('ZIP is required')
        .min(9999, 'Minimal length is 5'),
      state: Yup.string()
        .required('State is required'),
      city: Yup.string()
        .required('City is required'),
      country: Yup.string()
        .required('Country is required'),
    });

    return Yup.object().shape({
      shipping: addressBlockValidationSchema,
      billing: addressBlockValidationSchema,
      // // TODO add mobile phone validation
      mobile: Yup.string(),
    });
  }),
  displayName: 'AddressForm',
})(AddressForm);
