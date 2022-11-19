import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '../utils';

function Button({ children, className, icon, iconPosition, theme, onClick }) {
  const classes = [
    'button',
    `theme-${theme}`,
    className,
    iconPosition === 'before' ? 'before' : 'after',
  ];

  return (
    <button className={cx(classes)} onClick={onClick}>
      {children}
      {icon && icon}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  iconPosition: PropTypes.oneOf(['before', 'after']),
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['text', 'full', 'semi', 'icon']),
};

Button.defaultProps = {
  children: null,
  className: null,
  icon: null,
  iconPosition: 'after',
  theme: 'full',
};
