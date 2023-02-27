import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Modal,
  Wrapper,
  Text,
  ButtonWrapper,
  CloseButton,
  Backdrop,
} from './Modal.styled';
import { FiX } from 'react-icons/fi';
import { BtnDismiss, BtnLogOut } from 'components/Button/Button';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const ModalWindow = ({ children, closeModal, dispatch }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);
    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  });

  const handleEscapeClose = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop className="modal-backdrop" onClick={handleBackdropClose}>
      <Modal>
        <CloseButton onClick={closeModal}>
          <FiX size={20} />
        </CloseButton>

        <Wrapper>
          <Text>{children}</Text>
          <ButtonWrapper>
            <BtnLogOut
              type="button"
              dispatch={dispatch}
              closeModal={closeModal}
            >
              Yes
            </BtnLogOut>
            <BtnDismiss type="button" closeModal={closeModal}>
              No
            </BtnDismiss>
          </ButtonWrapper>
        </Wrapper>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};
