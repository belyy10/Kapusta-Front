import TableBody from 'components/TableBody';
import {
  TableBox,
  TableTitle,
  TableTitleItem,
  TransactionBox,
  TableBodys,
} from './Table.styled';

const monthTransaction = [
  {
    id: 1,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 12,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 13321,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 14,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 41,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 13,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 133,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 132,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 1432423,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 142,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
];

export default function Table() {
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
          {monthTransaction &&
            monthTransaction.map(transaction => (
              <TableBody key={transaction.id} transaction={transaction} />
            ))}
        </TableBodys>
      </TableBox>
    </TransactionBox>
  );
}
