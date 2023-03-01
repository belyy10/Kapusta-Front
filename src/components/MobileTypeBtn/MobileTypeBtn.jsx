// import { useDispatch, useSelector } from 'react-redux';
// import { changeType, getType } from 'redux/transactions';
import { Btn, Container } from './MobileTypeBtn.styled.jsx';

export default function MobileTypesBtn() {
  //   const transactionType = useSelector(getType);
  //   const dispatch = useDispatch();

  return (
    <Container>
      <Btn
        onClick={() => {
          //   dispatch(changeType('expenses'));
        }}
        // className={transactionType === 'expenses' ? 'active' : ''}
        name="expenses"
        type="submit"
      >
        Expenses
      </Btn>
      <Btn
        onClick={() => {
          //   dispatch(changeType('income'));
        }}
        // className={transactionType === 'income' ? 'active' : ''}
        name="incomes"
        type="submit"
      >
        Incomes
      </Btn>
    </Container>
  );
}
