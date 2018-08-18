import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Button from 'components/inputs/Button';
import Cart from './Cart';
import AboutService from './AboutService';
import CreateAccountForm from './CreateAccountForm';
import AddressForm from './AddressForm';
import SecureCreditCardPayment from './SecureCreditCardPayment';
import styles from './styles.scss';

@CSSModules(styles)
export class OrderModule extends Component {
  render() {
    return (
        <div styleName="content">
          <div styleName="title">
            <h1>MONTH-TO-MONTH SUBSCRIPTION</h1>
            <div styleName="info">Billed monthly. Renews automatically, cancel any time. Free shipping.</div>
          </div>
          <div styleName="left">
            <Cart />
            <AboutService />
          </div>
          <div styleName="forms">
            <div styleName="form">
              <CreateAccountForm />
            </div>
            <div styleName="form">
              <AddressForm />
            </div>
            <div styleName="form">
              <SecureCreditCardPayment />
            </div>
            <div styleName="buttons">
              <div>
                <a styleName="back">Back</a>
                <Button isArrow>BUY NOW</Button>
              </div>
            </div>
          </div>
          <div styleName="about">
            <AboutService />
          </div>
        </div>
    );
  }
}

export default OrderModule;
