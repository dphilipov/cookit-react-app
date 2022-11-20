import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { Image } from '../icons';

function Dropzone({ onFileDrop }) {
  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    onFileDrop(acceptedFiles, fileRejections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <Image />
    </div>
  );
}

export default Dropzone;

Dropzone.propTypes = {
  onFileDrop: PropTypes.func,
};

Dropzone.defaultProps = {
  onFileDrop: () => null,
};
