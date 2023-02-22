import { useAuth } from 'hooks/useAuth';
import Avatar from 'react-avatar';
import { Email, ExitBtn, UserContainer } from './UserMenu.styled';

export default function UserMenu() {
  const { userEmail } = useAuth();

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
      <ExitBtn type="button">Exit</ExitBtn>
    </UserContainer>
  );
}
