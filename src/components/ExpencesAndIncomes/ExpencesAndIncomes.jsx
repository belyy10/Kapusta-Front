import { 
  Block,
  ExpensesBlock,
  IncomesBlock, 
  BlockTitle, 
  ExpensesValue,
  IncomeValue
} from "./ExpensesAndIncomes.styled.jsx";

export default function ExpensesAndIncomes() {
  return (
    <Block>
      <ExpensesBlock>
        <BlockTitle>
          Expenses
        </BlockTitle>

        <ExpensesValue>
          - 18 000.00 UAH.
        </ExpensesValue>
      </ExpensesBlock>

      <IncomesBlock>
        <BlockTitle>
          Incomes
        </BlockTitle>

        <IncomeValue>
          + 45 000.00 UAH.
        </IncomeValue>
      </IncomesBlock>
    </Block>
  )
}