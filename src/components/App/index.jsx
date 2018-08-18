import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import OrderModule from 'modules/order';
import styles from './styles.scss';
import './global.scss';

@CSSModules(styles)
export class App extends Component {
  render() {
    return (
      <div styleName="global">
        <div styleName="header">
          <div styleName="logo" />
        </div>
        <OrderModule />
      </div>
    );
  }
}

export default App;
