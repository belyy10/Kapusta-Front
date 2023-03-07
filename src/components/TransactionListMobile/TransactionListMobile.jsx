import { BsTrash } from 'react-icons/bs';
import {
  TransactionUl,
  TransactionBox,
  TransactionDeleteBtn,
  TransactionDescription,
  TransactionInfo,
  TransactionInfoBox,
  TransactionItem,
  TransactionSum,
} from './TransactionListMobile.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactionsByType } from 'redux/transactions/transactionsSelectors';
import Moment from 'react-moment';
import { removeTransaction } from 'redux/transactions/transactionsOperations';

export default function TransactionListMobile({ openTrForm }) {
  const filteredTransactions = useSelector(selectTransactionsByType);
  const dispatch = useDispatch();

  return (
    <TransactionUl>
      {filteredTransactions.map(
        ({ _id, date, description, category, sum, type }) => {
          // console.log(type === 'expenses');

          return (
            <TransactionItem key={_id}>
              <div>
                <TransactionDescription>{description}</TransactionDescription>
                <TransactionInfoBox>
                  <TransactionInfo>
                    <Moment format="DD.MM.YYYY">{date}</Moment>
                  </TransactionInfo>
                  <TransactionInfo>{category}</TransactionInfo>
                </TransactionInfoBox>
              </div>
              <TransactionBox>
                <TransactionSum isExpenses={type === 'expenses'}>
                  {sum}
                </TransactionSum>
                <TransactionDeleteBtn
                  onClick={() => dispatch(removeTransaction(_id))}
                >
                  <BsTrash width={15} height={18} />
                </TransactionDeleteBtn>
              </TransactionBox>
            </TransactionItem>
          );
        }
      )}
    </TransactionUl>
  );
}
