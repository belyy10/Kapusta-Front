import {
  Button,
  Modal,
  Overlay,
  Content,
  Title,
  CloseButton,
  Confirm,
} from './modal.styled';

export default function ConfirmModal() {
  return (
    <>
      <Button>Confirm</Button>
      <Modal>
        <Overlay>
          <Content>
            <Title> Are you sure?</Title>
            <Button>Yes</Button>
            <Button>No</Button>
          </Content>
        </Overlay>
      </Modal>
    </>
  );
}
