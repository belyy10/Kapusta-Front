import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeTransaction } from 'redux/transactions/transactionsOperations';
import { DeleteBtn, TableBodyItem, TableBodyList } from './TableBody.styled';
import Moment from 'react-moment';
import { deleteStranBalanseChange } from 'redux/auth/authSlice';
// import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';

export default function TableBody({ transaction }) {
  const dispatch = useDispatch();
  // const type = useSelector(selectTypeTransactionMain);

  function handleDelete(id, sum) {
    dispatch(removeTransaction(id));
    dispatch(deleteStranBalanseChange(sum));
  }

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
        <DeleteBtn
          onClick={() => handleDelete(transaction._id, transaction.sum)}
        >
          <BsTrash />
        </DeleteBtn>
      </TableBodyItem>
    </TableBodyList>
  );
}
