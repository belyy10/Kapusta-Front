import {
  Button,
  Modal,
  Overlay,
  Content,
  Title,
  CloseButton,
  ButtonBox,
  Confirm,
} from './modal.styled';

import { FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function ConfirmModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Confirm onClick={toggleModal}>Confirm</Confirm>
      {modal && (
        <Modal>
          <Overlay onClick={toggleModal}>
            <Content>
              <Title> Are you sure?</Title>
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
