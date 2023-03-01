import { BsTrash } from 'react-icons/bs';
import {
  TransactionBox,
  TransactionDeleteBtn,
  TransactionDescription,
  TransactionInfo,
  TransactionInfoBox,
  TransactionItem,
  TransactionSum,
} from './TransactionListMobile.styled';
import { useSelector } from 'react-redux';
import { selectTransactionsByType } from 'redux/transactions/transactionsSelectors';
import Moment from 'react-moment';

export default function TransactionListMobile() {
  const filteredTransactions = useSelector(selectTransactionsByType);

  return (
    <ul>
      {filteredTransactions.map(
        ({ _id, date, description, category, sum, type }) => {
          console.log(type === 'expenses');

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
                <TransactionDeleteBtn>
                  <BsTrash width={15} height={18} />
                </TransactionDeleteBtn>
              </TransactionBox>
            </TransactionItem>
          );
        }
      )}
    </ul>
  );
}
