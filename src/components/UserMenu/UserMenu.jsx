import { ModalWindow } from 'components/Modal';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Email, ExitBtn, UserContainer } from './UserMenu.styled';

export default function UserMenu() {
  const { userEmail } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <UserContainer>
      <Avatar
        size="32"
        color="#F5F6FA"
        fgColor="#52555F"
        round={true}
        name={userEmail}
      />
      <Email>{userEmail}</Email>
      <ExitBtn type="button" onClick={handleModalOpen}>
        Exit
      </ExitBtn>
      {modalOpen && (
        <ModalWindow closeModal={handleModalClose} dispatch={handleClick}>
          Do you really want to leave?
        </ModalWindow>
      )}
    </UserContainer>
  );
}
