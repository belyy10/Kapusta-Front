import { useState } from 'react';

import CreateExpenses from 'components/CreateTransaction/CreateTransaction';
import {
  TransactionsWrapper,
  Incomes,
  Expenses,
} from './TransactionsContainer.styled';
import { useMedia } from 'hooks/useMedia';
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useDispatch } from 'react-redux';
import { toggleTransaction } from 'redux/transactions/transactionsSlice';

export default function TransactionsContainer() {
  const dispatch = useDispatch();
  const { isTabletAndDesktop, isMobile } = useMedia();
  const [transactions, setTransactions] = useState('incomes');
  const [isActive, setIsActive] = useState({
    incomes: true,
    expenses: false,
  });

  function changeTransaction(state) {
    setTransactions(state);

    if (state === 'incomes') {
      setIsActive({
        incomes: true,
        expenses: false,
      });
      return;
    }
    setIsActive({
      incomes: false,
      expenses: true,
    });
    return;
  }

  return (
    <TransactionsWrapper>
      <Incomes
        isActive={isActive.incomes}
        onClick={() => {
          changeTransaction('incomes');
          dispatch(toggleTransaction('incomes'));
        }}
      >
        Incomes
      </Incomes>
      <Expenses
        isActive={isActive.expenses}
        onClick={() => {
          changeTransaction('expenses');
          dispatch(toggleTransaction('expenses'));
        }}
      >
        Expenses
      </Expenses>
      <CreateExpenses transactions={transactions} />
      {isTabletAndDesktop && <Table transactions={transactions} />}
      {isMobile && <TransactionListMobile transactions={transactions} />}
    </TransactionsWrapper>
  );
}
