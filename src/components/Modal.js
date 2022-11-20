import React from 'react';
import ReactDOM from 'react-dom';
import { cx } from '../utils';
import Button from './Button';
import { XIcon } from '../icons';

function Modal({ open, children, onClose, modalClassName, title }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={cx(['modal-content', modalClassName])}>
        <div className="modal-header-content">
          <h2 className="modal-title">{title}</h2>
          <Button theme="icon" onClick={onClose}>
            <XIcon />
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-portal')
  );
}

export default Modal;
