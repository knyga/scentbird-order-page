import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Button = ({ children, isArrow }) => (
  <button styleName={classNames('button', { button__arrow: isArrow })}>
    {children}
    {isArrow && <span styleName="button_arrow" />}
  </button>
);
Button.defaultProps = {
  isArrow: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  isArrow: PropTypes.bool,
};

export default CSSModules(styles, { allowMultiple: true })(Button);
