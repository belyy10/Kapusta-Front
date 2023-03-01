import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeTransaction } from 'redux/transactions/transactionsOperations';
import { DeleteBtn, TableBodyItem, TableBodyList } from './TableBody.styled';
import Moment from 'react-moment';

export default function TableBody({ transaction }) {
  const dispatch = useDispatch();

  return (
    <TableBodyList>
      <TableBodyItem>
        <Moment format="DD.MM.YYYY">{transaction.date}</Moment>
      </TableBodyItem>
      <TableBodyItem>{transaction.description}</TableBodyItem>
      <TableBodyItem>{transaction.category}</TableBodyItem>
      <TableBodyItem isExpenses={transaction.type.toLowerCase() === 'expenses'}>
        {transaction.sum} UAH.
      </TableBodyItem>
      <TableBodyItem>
        <DeleteBtn onClick={() => dispatch(removeTransaction(transaction._id))}>
          <BsTrash />
        </DeleteBtn>
      </TableBodyItem>
    </TableBodyList>
  );
}
