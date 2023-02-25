// import CreateExpenses from 'components/Expenses/Expenses';
import {
  TransactionsWrapper,
  Incomes,
  Expenses,
} from './TransactionsContainer.styled';

export default function TransactionsContainer() {
  return (
    <TransactionsWrapper>
      <Incomes>Incomes</Incomes>
      <Expenses>Expenses</Expenses>
    </TransactionsWrapper>
  );
}
