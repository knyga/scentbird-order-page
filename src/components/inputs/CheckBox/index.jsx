import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.scss';

const CheckBox = ({ label, isPink, ...other }) => (
  <div styleName={classNames('wrapper', { wrapper__pink: isPink })}>
    <input type="checkbox" {...other} />
    {label && <label>{label}</label>}
  </div>
);

export default CSSModules(styles, { allowMultiple: true })(CheckBox);
