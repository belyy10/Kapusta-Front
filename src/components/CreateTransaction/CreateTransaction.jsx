import { Formik, ErrorMessage } from 'formik';
import moment from 'moment';
import { BiCalculator } from 'react-icons/bi';

import schemaTransactions from 'schema/schemaTransactions';
import expenseCategories from './ExpenseCategories';
import incomeCategories from './IncomeCategories';

import {
  Wrapper,
  Label,
  InputDate,
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
import { selectTypeTransactionMain } from 'redux/transactions/transactionsSelectors';
import { changeBalance } from 'redux/auth/authSlice';
import { changesSummary } from 'redux/transactions/transactionsSlice';

const initialValues = {
  date: moment().format('YYYY-MM-DD'),
  description: '',
  category: '',
  sum: '',
};

export default function CreateTransaction() {
  const type = useSelector(selectTypeTransactionMain);
  const dispatch = useDispatch();
  const currentDate = new Date().toISOString().slice(0, 10);

  const handleSubmit = (
    { date, description, category, sum },
    { resetForm }
  ) => {
    const d = date.split('-');

    dispatch(
      addTransaction({
        year: parseInt(d[0]),
        month: parseInt(d[1]),
        day: parseInt(d[2]),
        description,
        category,
        sum,
        type,
      })
    );
    const bal = type === 'expenses' ? sum * -1 : sum;

    dispatch(changeBalance(bal));
    dispatch(changesSummary({ sum, date }));

    resetForm(initialValues);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaTransactions}
        onSubmit={handleSubmit}
      >
        {({ handleChange, setFieldValue, values, resetForm }) => {
          return (
            <Wrapper>
              <InputGroup>
                <Label>
                  <InputDate
                    name="date"
                    type="date"
                    min="1920-01-01"
                    max={currentDate}
                    onChange={event =>
                      setFieldValue(
                        'date',
                        moment(event.target.value).format('YYYY-MM-DD')
                      )
                    }
                  />
                </Label>

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
                      {/* <Option disabled value="">
                    Product category
                  </Option> */}
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
                      {/* <Option disabled value="">
                    Product category
                  </Option> */}
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
    </>
  );
}
