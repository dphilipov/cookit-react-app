import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '../utils';

function TextArea({
  labelText,
  textAreaId,
  onChange,
  textAreaPlaceholder,
  textAreaValue,
  disabled,
  textAreaMaxlength,
}) {
  return (
    <div className={cx(['textarea-container', textAreaId])}>
      <label htmlFor={textAreaId}>{labelText}</label>
      <textarea
        id={textAreaId}
        onChange={onChange}
        placeholder={textAreaPlaceholder}
        disabled={disabled}
        maxLength={textAreaMaxlength}
        value={textAreaValue}
      />
    </div>
  );
}

export default TextArea;

TextArea.propTypes = {
  labelText: PropTypes.string,
  textAreaValue: PropTypes.string,
  textAreaId: PropTypes.string,
  onChange: PropTypes.func,
  textAreaPlaceholder: PropTypes.string,
  disabled: PropTypes.bool,
  textAreaMaxlength: PropTypes.number,
};
