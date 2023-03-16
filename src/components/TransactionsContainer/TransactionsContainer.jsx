import CreateExpenses from 'components/CreateTransaction/CreateTransaction';
import {
  TransactionsWrapper,
  Incomes,
  Expenses,
} from './TransactionsContainer.styled';

import { useMedia } from 'hooks/useMedia';
import Table from 'components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTransaction } from 'redux/transactions/transactionsSlice';
import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';

export default function TransactionsContainer() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTypeTransactionMain);
  const { isTabletAndDesktop } = useMedia();

  return (
    <TransactionsWrapper>
      <Incomes
        isActive={transactions === 'incomes'}
        onClick={() => dispatch(toggleTransaction('incomes'))}
      >
        Income
      </Incomes>
      <Expenses
        isActive={transactions === 'expenses'}
        onClick={() => dispatch(toggleTransaction('expenses'))}
      >
        Expenses
      </Expenses>
      <CreateExpenses transactions={transactions} />
      {isTabletAndDesktop && <Table />}
    </TransactionsWrapper>
  );
}
