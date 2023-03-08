import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { removeTransaction } from 'redux/transactions/transactionsOperations';
import { DeleteBtn, TableBodyItem, TableBodyList } from './TableBody.styled';
import Moment from 'react-moment';
import { deleteStranBalanseChange } from 'redux/auth/authSlice';
import { changesSummaryDelete } from 'redux/transactions/transactionsSlice';
import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';
import { ModalWindow } from 'components/Modal';
import { useState } from 'react';

export default function TableBody({ transaction }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const type = useSelector(selectTypeTransactionMain);

  function handleDelete() {
    dispatch(removeTransaction(transaction._id));
    dispatch(deleteStranBalanseChange(transaction.sum));

    const bal = type === 'expenses' ? transaction.sum * -1 : transaction.sum;

    dispatch(changesSummaryDelete({ date: transaction.date, sum: bal }));
    setModalOpen(false);
  }

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

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
        <DeleteBtn onClick={handleModalOpen}>
          <BsTrash />
        </DeleteBtn>
        {modalOpen && (
          <ModalWindow closeModal={handleModalClose} dispatch={handleDelete}>
            Are you sure?
          </ModalWindow>
        )}
      </TableBodyItem>
    </TableBodyList>
  );
}

// onClick={() =>
//   handleDelete(transaction._id, transaction.sum, transaction.date)
// }
// >
