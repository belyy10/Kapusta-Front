import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import {
  IconLink,
  LinkReport,
  LinkToMain,
  IconLinkMain,
  MainInfo,
} from './Main.styled';
import { refreshUser } from 'redux/auth/authOperations';
import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';
import { useMedia } from 'hooks/useMedia';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Main() {
  const { isMobile, isNeedRefreshUser } = useMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isNeedRefreshUser) {
      dispatch(refreshUser());
    }
  }, [isNeedRefreshUser, dispatch]);

  return (
    <BackgroundPrivateContainer>
      {isMobile ? (
        <>
          <LinkToMain to="/main">
            <IconLinkMain size={18} />
          </LinkToMain>
        </>
      ) : null}

      {!isMobile && (
        <MainInfo>
          <Balance />
          <LinkReport to="/reports">
            Reports
            <IconLink size={14} />
          </LinkReport>
        </MainInfo>
      )}
      <TransactionsContainer />
    </BackgroundPrivateContainer>
  );
}
