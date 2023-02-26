import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';

import Balance from 'components/Balance';
import Container from 'components/Container';
//
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useMedia } from 'hooks/useMedia';
import { Link } from 'react-router-dom';
// import CreateExpenses from 'components/Expenses/Expenses';
// import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';

export default function Main() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  return (
    <BackgroundPrivateContainer>
      <Container>
        <h1>MAIN PAGE</h1>

        <Balance />
        <Link to="/reports">reports</Link>

        {isTabletAndDesktop && <Table />}
        {isMobile && <TransactionListMobile />}
      </Container>
    </BackgroundPrivateContainer>
  );
}
