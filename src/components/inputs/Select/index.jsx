import React from 'react';
import ReactSelect from 'react-select';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.scss';

// TODO merge duplicates - Input component
const Select = ({
  error, isTouched, isWhite, ...other
}) => (
  <div styleName={classNames('wrapper', { wrapper__error: error && isTouched, wrapper__white: isWhite })}>
    <ReactSelect classNamePrefix="selectx" className="selectx" {...other} />
    <div styleName="error">{isTouched && error}</div>
  </div>
);

export default CSSModules(styles, { allowMultiple: true })(Select);
