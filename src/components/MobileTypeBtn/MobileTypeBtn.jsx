import { useDispatch, useSelector } from 'react-redux';
import { toggleTransaction } from 'redux/transactions/transactionsSlice.js';
import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';
import { Btn, Container } from './MobileTypeBtn.styled.jsx';
import COLORS from 'variables/colors/colors.js';
// import { useState } from 'react';

export default function MobileTypesBtn({openTrForm}) {
  const transactions = useSelector(selectTypeTransactionMain);
  const dispatch = useDispatch();
  // const [isActive, setIsActive]=useState(true);

  return (
    <Container>
      <Btn
      isActive={transactions === 'expenses'}
    
      // className={transactions === 'expenses' ? COLORS.activeColor : ''}
      // setActive={true}
      onClick={() => {dispatch(toggleTransaction('expenses'));
      openTrForm && openTrForm(true);
    }}
        name="expenses"
        type="submit"
      >
        Expenses
      </Btn>
      <Btn
      // isActive={transactions === 'incomes'}
      // setActive={false}
      className={transactions === 'incomes' ? COLORS.activeColor : ''}
      onClick={() => { dispatch(toggleTransaction('incomes'));
      
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
