// import CreateExpenses from 'components/Expenses/Expenses';
import CreateExpenses from 'components/Expenses/Expenses';
import {
  TransactionsWrapper,
  Incomes,
  Expenses,
} from './TransactionsContainer.styled';
import { useMedia } from 'hooks/useMedia';
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';

export default function TransactionsContainer() {
  const { isTabletAndDesktop, isMobile } = useMedia();
  return (
    <TransactionsWrapper>
      <Incomes to="incomes" state={{}}>
        Incomes
      </Incomes>
      <Expenses to="expenses" state={{}}>
        Expenses
      </Expenses>
      <CreateExpenses />
      {isTabletAndDesktop && <Table />}
      {isMobile && <TransactionListMobile />}
    </TransactionsWrapper>
  );
}
