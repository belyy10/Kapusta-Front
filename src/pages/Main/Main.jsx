import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Container from 'components/Container';
//
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useMedia } from 'hooks/useMedia';
import CreateExpenses from 'components/Expenses/Expenses';
// import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';

import { TransactionsWrapper, Incomes, Expenses } from './Main.styled';

export default function Main() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  return (
    <BackgroundPrivateContainer>
      <Container>
        <h1>MAIN PAGE</h1>
        <TransactionsWrapper>
          <Incomes>Incomes</Incomes>
          <Expenses>Expenses</Expenses>
          <CreateExpenses />
          {isTabletAndDesktop && <Table />}
          {isMobile && <TransactionListMobile />}
        </TransactionsWrapper>

        {/* <TransactionsContainer> */}
        {/* <CreateExpenses /> */}
      </Container>
    </BackgroundPrivateContainer>
  );
}
