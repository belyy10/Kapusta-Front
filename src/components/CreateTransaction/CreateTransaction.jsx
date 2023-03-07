import { Formik, ErrorMessage } from 'formik';
import { BiCalculator } from 'react-icons/bi';
import Notiflix from 'notiflix';
import schemaTransactions from 'schema/schemaTransactions';
import expenseCategories from './ExpenseCategories';
import incomeCategories from './IncomeCategories';
import {
  Wrapper,
  Container,
  Label,
  InputGroup,
  InputDescription,
  InputSum,
  InputSumWrapper,
  ButtonGroup,
  Button,
  ButtonInput,
  SelectCategory,
  Option,
  Calculator,
  Error,
} from './CreateTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from 'redux/transactions/transactionsOperations';
import {
  selectDate,
  selectTypeTransactionMain,
} from 'redux/transactions/transactionsSelectors';
import { changeBalance } from 'redux/auth/authSlice';
import { changesSummary } from 'redux/transactions/transactionsSlice';
import SelectDate from 'components/SelectDate/SelectDate';
import { selectUserBalance } from 'redux/auth/authSelectors';
import { useMedia } from 'hooks/useMedia';


const initialValues = {
  description: '',
  category: '',
  sum: '',
};

export default function CreateTransaction() {
  const { isTabletAndDesktop } = useMedia();
  const date = useSelector(selectDate);
  const type = useSelector(selectTypeTransactionMain);
  const balance = useSelector(selectUserBalance);
  const dispatch = useDispatch();

  const handleSubmit = ({ description, category, sum }, { resetForm }) => {
    const bal = type === 'expenses' ? sum * -1 : sum;
    const isNegative = balance - sum;

    if (type === 'expenses' && isNegative < 0) {
      Notiflix.Notify.failure(
        "You don't have enough money in your balance to perform this transaction"
      );
      return;
    }

    dispatch(
      addTransaction({
        description,
        category,
        sum,
        type,
      })
    );

    dispatch(changeBalance(bal));
    dispatch(changesSummary({ sum, date }));

    resetForm(initialValues);
  };

  return (
    <Container>
      {isTabletAndDesktop && <SelectDate />}
      <Formik
        initialValues={initialValues}
        validationSchema={schemaTransactions}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values, resetForm }) => {
          return (
            <Wrapper>
              <InputGroup>
                <Label>
                  <InputDescription
                    type="text"
                    name="description"
                    placeholder="Product description"
                  />
                  <ErrorMessage
                    name="description"
                    render={msg => <Error>{msg}</Error>}
                  />
                </Label>

                <Label>
                  {type.toLowerCase() === 'incomes' ? (
                    <SelectCategory
                      name="category"
                      as="select"
                      value={values.category}
                      onChange={handleChange}
                    >
                      {incomeCategories.map(category => (
                        <Option key={category.value} value={category.value}>
                          {category.label}
                        </Option>
                      ))}
                    </SelectCategory>
                  ) : (
                    <SelectCategory
                      name="category"
                      as="select"
                      value={values.category}
                      onChange={handleChange}
                    >
                      {expenseCategories.map(category => (
                        <Option key={category.value} value={category.value}>
                          {category.label}
                        </Option>
                      ))}
                    </SelectCategory>
                  )}

                  <ErrorMessage
                    name="category"
                    render={msg => <Error>{msg}</Error>}
                  />
                </Label>

                <InputSumWrapper>
                  <InputSum
                    type="number"
                    name="sum"
                    min="0"
                    placeholder="00.00"
                  />
                  <Calculator>
                    <BiCalculator size={18} />
                  </Calculator>

                  <ErrorMessage
                    name="sum"
                    render={msg => <Error>{msg}</Error>}
                  />
                </InputSumWrapper>
              </InputGroup>

              <ButtonGroup>
                <ButtonInput type="submit">Input</ButtonInput>
                <Button type="button" onClick={resetForm}>
                  Clear
                </Button>
              </ButtonGroup>
            </Wrapper>
          );
        }}
      </Formik>
    </Container>
  );
}
