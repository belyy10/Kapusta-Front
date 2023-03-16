import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSummaryExpenses } from 'redux/transactions/transactionsOperations';
import { SummaryBox, SummaryTitle, SummaryBody } from './Summary.styled';
import SummaryBodyList from '../SummaryList/SummaryList';

export default function Summary({ monthSumm }) {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  console.log('isLogged', isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchSummaryExpenses());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <SummaryBox>
      <SummaryTitle>Summary</SummaryTitle>

      <SummaryBody>
        {monthSumm &&
          monthSumm.map(item => <SummaryBodyList key={item._id} item={item} />)}
      </SummaryBody>
    </SummaryBox>
  );
}
