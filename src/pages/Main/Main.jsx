import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import Container from 'components/Container';
import { IconLink, LinkReport } from './Main.styled';
// import CreateExpenses from 'components/Expenses/Expenses';
import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserTransactions } from 'redux/transactions/transactionsOperations';

export default function Main() {
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
  }, [dispatch]);

  return (
    <BackgroundPrivateContainer>
      <Container>
        <LinkReport to="/reports">
          reports
          <IconLink size={14} color=" #52555F" />
        </LinkReport>
        <Balance />
        <TransactionsContainer />
      </Container>
    </BackgroundPrivateContainer>
  );
}
