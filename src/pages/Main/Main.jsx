import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';

import Balance from 'components/Balance';
import Container from 'components/Container';

import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useMedia } from 'hooks/useMedia';

// import CreateExpenses from 'components/Expenses/Expenses';
// import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';

export default function Main() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  return (
    <BackgroundPrivateContainer>
      <Container>
        <h1>MAIN PAGE</h1>

        <Balance />

        {isTabletAndDesktop && <Table />}
        {isMobile && <TransactionListMobile />}
      </Container>
    </BackgroundPrivateContainer>
  );
}
