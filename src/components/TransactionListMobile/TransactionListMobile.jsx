import { BsTrash } from 'react-icons/bs';
import { TransactionItem } from './TransactionListMobile.styled';

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

export default function TransactionListMobile() {
  return (
    <ul>
      {monthTransaction.map(({ id, date, description, category, sum }) => {
        return (
          <TransactionItem key={id}>
            <div>
              <p>{description}</p>
              <p>{date}</p>
              <p>{category}</p>
            </div>
            <div>
              <p>{sum}</p>
              <button>
                <BsTrash />
              </button>
            </div>
          </TransactionItem>
        );
      })}
    </ul>
  );
}
