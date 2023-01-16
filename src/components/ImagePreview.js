import React from 'react';
import PropTypes from 'prop-types';
import { useImagePreview } from '../hooks';
import { cx } from '../utils';
import { DEFAULT_RECIPE_IMAGE } from '../constants';

function ImagePreview({ imageId = DEFAULT_RECIPE_IMAGE, quality, className }) {
  const imgPreview = useImagePreview(imageId, quality);

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
