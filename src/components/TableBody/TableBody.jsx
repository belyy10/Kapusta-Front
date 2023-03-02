import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { removeTransaction } from 'redux/transactions/transactionsOperations';
import { DeleteBtn, TableBodyItem, TableBodyList } from './TableBody.styled';
import Moment from 'react-moment';
import { deleteStranBalanseChange } from 'redux/auth/authSlice';
import { changesSummaryDelete } from 'redux/transactions/transactionsSlice';
import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';

export default function TableBody({ transaction }) {
  const dispatch = useDispatch();
  const type = useSelector(selectTypeTransactionMain);

  function handleDelete(id, sum, date) {
    dispatch(removeTransaction(id));
    dispatch(deleteStranBalanseChange(sum));

    const bal = type === 'expenses' ? sum * -1 : sum;

    dispatch(changesSummaryDelete({ date, sum: bal }));
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
          onClick={() =>
            handleDelete(transaction._id, transaction.sum, transaction.date)
          }
        >
          <BsTrash />
        </DeleteBtn>
      </TableBodyItem>
    </TableBodyList>
  );
}
