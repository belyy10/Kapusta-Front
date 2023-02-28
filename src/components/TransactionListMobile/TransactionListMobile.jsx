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

export default function TransactionListMobile() {
  const filteredTransactions = useSelector(selectTransactionsByType);

  return (
    <ul>
      {filteredTransactions.map(({ _id, date, description, category, sum }) => {
        return (
          <TransactionItem key={_id}>
            <div>
              <TransactionDescription>{description}</TransactionDescription>
              <TransactionInfoBox>
                <TransactionInfo>{date}</TransactionInfo>
                <TransactionInfo>{category}</TransactionInfo>
              </TransactionInfoBox>
            </div>
            <TransactionBox>
              <TransactionSum>{sum}</TransactionSum>
              <TransactionDeleteBtn>
                <BsTrash width={15} height={18} />
              </TransactionDeleteBtn>
            </TransactionBox>
          </TransactionItem>
        );
      })}
    </ul>
  );
}
