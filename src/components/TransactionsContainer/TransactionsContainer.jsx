import CreateExpenses from 'components/CreateTransaction/CreateTransaction';
import {
  TransactionsWrapper,
  Incomes,
  Expenses,
} from './TransactionsContainer.styled';
import { useMedia } from 'hooks/useMedia';
import Table from 'components/Table';
// import TransactionListMobile from 'components/TransactionListMobile';

import Summary from 'components/Summary';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTransaction } from 'redux/transactions/transactionsSlice';
import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';

export default function TransactionsContainer() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTypeTransactionMain);

  const { isTabletAndDesktop, isMobile } = useMedia();

  return (
    <TransactionsWrapper>
      <Incomes
        isActive={transactions === 'incomes'}
        onClick={() => dispatch(toggleTransaction('incomes'))}
      >
        Incomes
      </Incomes>
      <Expenses
        isActive={transactions === 'expenses'}
        onClick={() => dispatch(toggleTransaction('expenses'))}
      >
        Expenses
      </Expenses>
      <CreateExpenses transactions={transactions} />
      {isTabletAndDesktop && <Table />}
      {/* {isMobile && <TransactionListMobile />} */}
      {!isMobile && <Summary />}
    </TransactionsWrapper>
  );
}
