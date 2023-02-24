import { useState, useEffect } from 'react';

import {
  Button,
  Modal,
  Overlay,
  Content,
  Title,
  CloseButton,
  ButtonBox,
  Confirm,
} from './Modal.styled';

import { FiX } from 'react-icons/fi';

export default function OpenModal({ title }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        // Escape key code
        setModal(false);
      }
    }

    // Add event listener for keydown
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Confirm onClick={toggleModal}>Leave</Confirm>
      {modal && (
        <Modal>
          <Overlay onClick={toggleModal} onKeyDown={toggleModal}>
            <Content>
              <Title>{title}</Title>
              <ButtonBox>
                <Button>Yes</Button>
                <Button
                  style={{ backgroundColor: '#ffffff', color: 'currentcolor' }}
                >
                  No
                </Button>
              </ButtonBox>
              <CloseButton onClick={toggleModal}>
                <FiX size={20} />
              </CloseButton>
            </Content>
          </Overlay>
        </Modal>
      )}
    </>
  );
}
