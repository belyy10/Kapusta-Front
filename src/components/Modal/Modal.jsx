import { useState } from 'react';
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

export default function LeaveModal({ title }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Confirm onClick={toggleModal}>Leave</Confirm>
      {modal && (
        <Modal>
          <Overlay onClick={toggleModal}>
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
