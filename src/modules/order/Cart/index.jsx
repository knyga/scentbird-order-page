import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import CheckBox from 'components/inputs/CheckBox';
import styles from './styles.scss';

@CSSModules(styles)
export class Cart extends Component {
  render() {
    return (
      <div styleName="total">
        <div styleName="flask" />
        <div styleName="info">
          <div styleName="info_content">
            <div styleName="row">
              <div>Monthly subscription</div>
              <div>$14.95</div>
            </div>
            <div styleName="row">
              <div>Shipping</div>
              <div>FREE</div>
            </div>
            <div styleName="row">
              <div>Tax</div>
              <div>$2.35</div>
            </div>
            <div styleName="row">
              <div>Discount</div>
              <div styleName="discount">-$5</div>
            </div>
            <div styleName="row">
              <div>Credit (Balance $100)</div>
              <div>
                <label>$50</label>
                <CheckBox defaultChecked />
              </div>
            </div>
          </div>
          <div styleName="row">
            <div>TOTAL</div>
            <div>$25.00</div>
          </div>
          <div>
            Have a <a>coupon code</a>?
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
