// import { useSelector } from 'react-redux';
// import { getReportsData } from 'redux/transactions/transactionsSelectors.js';
import { Sum, ItemText, Wraper } from './ReportInfo.styled.jsx';

export default function ReportInfo() {
  // const reportsData = useSelector(getReportsData);

  return (
    <Wraper>
      <div>
        <ItemText>Expenses:</ItemText>
        <Sum type={'expenses'}>- 0.00 UAH.</Sum>
      </div>
      <div>
        <ItemText>Incomes:</ItemText>
        <Sum type={'incomes'}>+ 0.00 UAH.</Sum>
      </div>
    </Wraper>
  );
}
