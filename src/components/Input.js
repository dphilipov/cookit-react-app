import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '../utils';

function Input({
  labelText,
  inputId,
  onChange,
  inputValue,
  inputPlaceholder,
  disabled,
  inputType,
}) {
  return (
    <div className={cx(['input-container', inputId])}>
      {labelText && <label htmlFor={inputId}>{labelText}</label>}
      <input
        id={inputId}
        onChange={onChange}
        placeholder={inputPlaceholder}
        value={inputValue}
        type={inputType}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  labelText: PropTypes.string,
  inputId: PropTypes.string,
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  disabled: PropTypes.bool,
  inputType: PropTypes.oneOf(['text', 'number']),
};

Input.defaultProps = {
  inputType: 'text',
};
