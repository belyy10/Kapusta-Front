import { useSelector } from 'react-redux';
import {
  getReportsData,
  getSummaryExpenses,
  getSummaryIncomes,
  selectIncomesByCurrentPeriod,
  selectExpensesByCurrentPeriod,
} from 'redux/transactions/transactionsSelectors.js';
import { Sum, ItemText, Wraper } from './ReportInfo.styled.jsx';

export default function ReportInfo() {
  const reportsData = useSelector(getReportsData);
  const reportsExpenses = useSelector(getSummaryExpenses);
  const reportsIncomes = useSelector(getSummaryIncomes);
  const incomes = useSelector(selectIncomesByCurrentPeriod);
  const expenses = useSelector(selectExpensesByCurrentPeriod);

  console.log('reportsExpenses', reportsExpenses);
  console.log('reportsIncomes', reportsIncomes);
  console.log('getReportsData', reportsData);
  console.log('income', incomes);
  console.log('expenses', expenses);

  // function sumExpenses() {
  //   const sum = reportsExpenses.filter(arr => arr._id === reportsData);

  //   if (sum === {} || !sum) {
  //     return null;
  //   }

  //   return sum.expenses;
  // }

  // function sumIncomes() {
  //   const sum = reportsIncomes.filter(arr => arr._id === reportsData);

  //   if (sum === {} || !sum) {
  //     return null;
  //   }

  //   return sum.incomes;
  // }

  return (
    <Wraper>
      <div>
        <ItemText>Expenses:</ItemText>
        <Sum type={'expenses'}>- {expenses}.00 UAH.</Sum>
      </div>
      <div>
        <ItemText>Incomes:</ItemText>
        <Sum type={'incomes'}>+ {incomes}.00 UAH.</Sum>
      </div>
    </Wraper>
  );
}
