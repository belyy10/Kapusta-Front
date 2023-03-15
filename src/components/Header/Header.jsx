import { Link, Outlet } from 'react-router-dom';
import { HeaderBox } from './Header.styled';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderBox>
        <Link to="/main">
          <picture>
            <source
              srcSet={process.env.PUBLIC_URL + '/images/logo/logo.webp 1x'}
              type="image/webp"
            />
            <img
              src={process.env.PUBLIC_URL + '/images/logo/logo.png'}
              alt="logo"
            />
          </picture>
        </Link>
        {isLoggedIn && <UserMenu />}
      </HeaderBox>
      <Outlet />
    </>
  );
}
