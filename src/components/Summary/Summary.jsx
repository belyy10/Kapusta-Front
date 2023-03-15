import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSummaryExpenses } from 'redux/transactions/transactionsOperations';
// import { selectSummaryExpenses } from 'redux/transactions/transactionsSelectors';
import { SummaryBox, SummaryTitle, SummaryBody } from './Summary.styled';

import SummaryBodyList from './SummaryList';

export default function Summary({ monthSumm }) {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      const сontroller = new AbortController();
      dispatch(fetchSummaryExpenses(сontroller));
      return () =>  сontroller.abort();
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
