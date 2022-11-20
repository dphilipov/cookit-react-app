import React from 'react';
import PropTypes from 'prop-types';
import { useImagePreview } from '../hooks';
import { cx } from '../utils';

function ImagePreview({ imageId, quality, className }) {
  const imgPreview = useImagePreview('635305e903cd3', quality);

  const classes = ['image-preview', className];

  return <img className={cx(classes)} src={imgPreview} alt="Recipe Preview" />;
}

export default ImagePreview;

ImagePreview.propTypes = {
  imageId: PropTypes.string.isRequired,
  quality: PropTypes.number,
};

ImagePreview.defaultProps = {
  quality: 100,
};
