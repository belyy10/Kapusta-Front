import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import Container from 'components/Container';
//
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useMedia } from 'hooks/useMedia';
import { IconLink, LinkReport } from './Main.styled';

// import CreateExpenses from 'components/Expenses/Expenses';
// import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';

export default function Main() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  return (
    <BackgroundPrivateContainer>
      <Container>
        {/* <h1>MAIN PAGE</h1> */}

        <LinkReport to="/reports">
          reports
          <IconLink size={14} color=" #52555F" />
        </LinkReport>
        <Balance />

        {isTabletAndDesktop && <Table />}
        {isMobile && <TransactionListMobile />}
      </Container>
    </BackgroundPrivateContainer>
  );
}
