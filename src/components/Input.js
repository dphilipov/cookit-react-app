import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '../utils';

function Input({
  disabled,
  inputId,
  inputPlaceholder,
  inputType,
  inputValue,
  labelText,
  onChange,
  theme,
}) {
  return (
    <div className={cx(['input-container', inputId])}>
      {labelText && <label htmlFor={inputId}>{labelText}</label>}
      <input
        className={cx([`theme-${theme}`])}
        disabled={disabled}
        id={inputId}
        onChange={onChange}
        placeholder={inputPlaceholder}
        type={inputType}
        value={inputValue}
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  disabled: PropTypes.bool,
  inputId: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputType: PropTypes.oneOf(['text', 'number']),
  inputValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['full', 'semi']),
};

Input.defaultProps = {
  inputType: 'text',
  theme: 'full',
};
