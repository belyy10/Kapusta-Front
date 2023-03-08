import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import { IconLink, LinkReport, LinkToMain, IconLinkMain } from './Main.styled';
import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';
import { useMedia } from 'hooks/useMedia';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserTransactions } from 'redux/transactions/transactionsOperations';

export default function Main() {
  const { isMobile } = useMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(
      fetchUserTransactions({
        type: 'expenses',
        controller,
      })
    );
    dispatch(
      fetchUserTransactions({
        type: 'incomes',
        controller,
      })
    );

    return () => controller.abort();
  }, []);

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
        <>
          <LinkReport to="/reports">
            Reports
            <IconLink size={14} />
          </LinkReport>
          <Balance />
        </>
      )}
      <TransactionsContainer />
    </BackgroundPrivateContainer>
  );
}
