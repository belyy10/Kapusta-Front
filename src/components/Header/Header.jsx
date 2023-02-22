import Container from 'components/Container';
import { Outlet } from 'react-router-dom';
import { HeaderBox } from './Header.styled';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        <HeaderBox>
          <picture>
            <source srcset="./images/logo/logo.webp 1x" type="image/webp" />

            <img src="./images/logo/logo.png" alt="logo" />
          </picture>

          {isLoggedIn && <UserMenu />}
        </HeaderBox>
      </Container>
      <Outlet />
    </>
  );
}
