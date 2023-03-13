import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSummaryExpenses } from 'redux/transactions/transactionsOperations';
// import { selectSummaryExpenses } from 'redux/transactions/transactionsSelectors';
import { SummaryBox, SummaryTitle, SummaryBody } from './Summary.styled';

import SummaryBodyList from './SummaryList';

export default function Summary({ monthSumm }) {
  // console.log('sum_mont', monthSumm);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSummaryExpenses());
  }, [dispatch]);
  // const monthSummary = useSelector(selectSummaryExpenses);
  // console.log('monthSummary',monthSummary);
  // console.log('type', type);

  return (
    <SummaryBox>
      <SummaryTitle>Summary</SummaryTitle>
   
      <SummaryBody>
         {monthSumm && 
          monthSumm.map(item => (
            <SummaryBodyList key={item._id} item={item} />
          ))}
       </SummaryBody>
    </SummaryBox>
  );
}
