import Summary from 'components/Summary';
import TableBody from 'components/TableBody';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSummaryExpenses } from 'redux/transactions/transactionsOperations';
import {
  selectSummaryExpenses,
  selectTransactionsByTypeAndDate,
} from 'redux/transactions/transactionsSelectors';
import {
  TableBox,
  TableTitle,
  TableTitleItem,
  TransactionBox,
  TableBodys,
} from './Table.styled';
import { useEffect } from 'react';

export default function Table() {
  const filteredTransactions = useSelector(selectTransactionsByTypeAndDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSummaryExpenses());
  }, [dispatch]);
  const monthSumm = useSelector(selectSummaryExpenses);

  return (
    <TransactionBox>
      <TableBox>
        <thead>
          <TableTitle>
            <TableTitleItem>DATE</TableTitleItem>
            <TableTitleItem>DESCRIPTION</TableTitleItem>
            <TableTitleItem>category</TableTitleItem>
            <TableTitleItem>sum</TableTitleItem>
            <TableTitleItem></TableTitleItem>
          </TableTitle>
        </thead>
        <TableBodys>
          {filteredTransactions &&
            filteredTransactions.map(transaction => (
              <TableBody key={transaction._id} transaction={transaction} />
            ))}
        </TableBodys>
      </TableBox>
      <Summary key={monthSumm._id} monthSumm={monthSumm} />
    </TransactionBox>
  );
}
