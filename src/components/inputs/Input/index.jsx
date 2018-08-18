import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import dotAccess from 'dot-access';
import styles from './styles.scss';

const Input = (props) => {
  const {
    placeholder, isWhite, info, ...other
  } = props;
  const { name, form, value } = props;
  const error = dotAccess.get(form.errors, name);
  const isTouched = !!dotAccess.get(form.touched, name);

  // TODO show info when user clicks on info
  return (
    <div styleName={classNames('wrapper',
      { wrapper__error: error && isTouched, wrapper__white: isWhite, wrapper__info: info })}
    >
      <input type="text" {...other} required />
      <div styleName={classNames('placeholder', { placeholder__hidden: !!value })}>{placeholder}</div>
      <div styleName="error">{isTouched && error}</div>
      {isTouched && !error && value && <div styleName="checkmark" />}
      {info && !(isTouched && !error) && <div styleName="info" title={info} />}
    </div>
  );
};

export default CSSModules(styles, { allowMultiple: true })(Input);
