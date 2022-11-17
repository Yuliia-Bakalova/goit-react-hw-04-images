import {  useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContent } from './Modal.styled';



const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
  

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  
  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot
  );
  
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
