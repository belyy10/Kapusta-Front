import { useSelector } from 'react-redux';
import { selectSummary } from 'redux/transactions/transactionsSelectors.js';
import { Sum, ItemText, Wraper } from './ReportInfo.styled.jsx';

export default function ReportInfo() {
  const { incomes, expenses } = useSelector(selectSummary);

  return (
    <Wraper>
      <div>
        <ItemText>Expenses:</ItemText>
        <Sum type={'expenses'}> {expenses}.00 UAH</Sum>
      </div>
      <div>
        <ItemText>Incomes:</ItemText>
        <Sum type={'incomes'}>+ {incomes}.00 UAH</Sum>
      </div>
    </Wraper>
  );
}
