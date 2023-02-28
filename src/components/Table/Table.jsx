import TableBody from 'components/TableBody';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/transactionsSelectors';
import {
  TableBox,
  TableTitle,
  TableTitleItem,
  TransactionBox,
  TableBodys,
} from './Table.styled';

// const monthTransaction = [
//   {
//     id: 1,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 12,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 13321,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 14,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 41,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 13,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 133,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 132,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 1432423,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: 142,
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
//   {
//     id: Math.random(),
//     date: '21.09.2019',
//     description: 'salary',
//     category: 'car',
//     sum: 2000,
//   },
// ];

export default function Table({ transactions }) {
  const [filteredTransactions, setFilteredTransactions] = useState(null);
  const transaction = useSelector(selectTransactions);

  useEffect(() => {
    const filterTransaction = transaction.filter(
      element => element.type.toLowerCase() === transactions.toLowerCase()
    );
    setFilteredTransactions(filterTransaction);
  }, [transactions, transaction]);

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
    </TransactionBox>
  );
}
