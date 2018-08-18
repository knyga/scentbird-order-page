import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

@CSSModules(styles)
export class AboutService extends Component {
  render() {
    return (
      <div styleName="about">
        <div styleName="bird" />
        <div styleName="text">
          You will receive an email confirmation when recipient accepts your gift.
          Scentbird ships between the 15th and the 18th of every month.
          Recipient will receive an email confirmation of shipment every month.
          Please allow 5-7 days for delivery.
        </div>
      </div>
    );
  }
}

export default AboutService;
