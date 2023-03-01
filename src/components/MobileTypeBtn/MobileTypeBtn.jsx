import { useDispatch, useSelector } from 'react-redux';
import { toggleTransaction } from 'redux/transactions/transactionsSlice.js';
import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';
import { Btn, Container } from './MobileTypeBtn.styled.jsx';

export default function MobileTypesBtn({openTrForm}) {
  const transactions = useSelector(selectTypeTransactionMain);
  const dispatch = useDispatch();

  return (
    <Container>
      <Btn
      isActive={transactions === 'expenses'}
      onClick={() => {dispatch(toggleTransaction('expenses'));
      openTrForm && openTrForm(true);
    }}
        name="expenses"
        type="submit"
      >
        Expenses
      </Btn>
      <Btn
      isActive={transactions === 'incomes'}
      onClick={() => {dispatch(toggleTransaction('incomes'));
      openTrForm && openTrForm(true);
    }}
        name="incomes"
        type="submit"
      >
        Incomes
      </Btn>
    </Container>
  );
}
