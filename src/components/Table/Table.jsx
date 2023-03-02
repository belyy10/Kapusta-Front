import Summary from 'components/Summary';
import TableBody from 'components/TableBody';
import { useSelector } from 'react-redux';
import { selectTransactionsByType } from 'redux/transactions/transactionsSelectors';
import {
  TableBox,
  TableTitle,
  TableTitleItem,
  TransactionBox,
  TableBodys,
} from './Table.styled';

export default function Table() {
  const filteredTransactions = useSelector(selectTransactionsByType);

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
      <Summary/>
    </TransactionBox>
  );
}
