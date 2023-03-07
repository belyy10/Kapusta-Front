import { Formik, ErrorMessage } from 'formik';
import moment from 'moment';
import { BiCalculator } from 'react-icons/bi';

import { useState } from 'react';
import Notiflix from 'notiflix';
import schemaTransactions from 'schema/schemaTransactions';
import expenseCategories from './ExpenseCategories';
import incomeCategories from './IncomeCategories';
import { useState } from 'react';
import {
  Wrapper,
  Container,
  Label,
  // InputDate,
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
import SelectDate from 'components/SelectDate/SelectDate';

const initialValues = {
  date: moment().format('yyyy-MM-DD'),
  description: '',
  category: '',
  sum: '',
};

export default function CreateTransaction() {
  const type = useSelector(selectTypeTransactionMain);
  const dispatch = useDispatch();

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  const newDate = new Date(date);

  console.log(newDate);



  const handleSubmit = ({ description, category, sum }, { resetForm }) => {
    const bal = type === 'expenses' ? sum * -1 : sum;
    if (bal < 0) {
      return Notiflix.Notify.failure(
        "You don't have enough money in your balance to perform this transaction"
      );
    }

    dispatch(
      addTransaction({
        date: date,
        description,
        category,
        sum,
        type,
        date: newDate,
      })
    );

    dispatch(changeBalance(bal));
    dispatch(changesSummary({ sum, date }));

    resetForm(initialValues);
  }

  return (
    <Container>
      <SelectDate value={date} handleDateChange={setDate} />
      <Formik
        initialValues={initialValues}
        validationSchema={schemaTransactions}
        onSubmit={handleSubmit}
      >
        {({ handleChange, setFieldValue, values, resetForm }) => {
          return (
            <Wrapper>
              <InputGroup>
                {/* <Label>
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
                </Label> */}

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
    </Container>
  );
}
