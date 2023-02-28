import { useState } from 'react';
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
  SelectCategory,
  Option,
  Calculator,
  Error,
} from './CreateTransaction.styled';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transactions/transactionsOperations';

const initialValues = {
  date: moment().format('YYYY-MM-DD'),
  description: '',
  category: null,
  sum: 0,
};

export default function CreateTransaction({ transactions }) {
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
        type: transactions,
      })
    );
    resetForm(initialValues);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaTransactions}
        onSubmit={handleSubmit}
      >
        {({ handleChange, setFieldValue }) => (
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
              <ErrorMessage name="date" render={msg => <Error>{msg}</Error>} />

              <Label>
                <InputDescription
                  type="text"
                  name="description"
                  placeholder="Product description"
                />
              </Label>
              <ErrorMessage
                name="description"
                render={msg => <Error>{msg}</Error>}
              />

              {transactions === 'incomes' ? (
                <SelectCategory
                  name="category"
                  as="select"
                  defaultValue=""
                  onChange={handleChange}
                >
                  <Option disabled value="">
                    Product category
                  </Option>
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
                  defaultValue=""
                  onChange={handleChange}
                >
                  <Option disabled value="">
                    Product category
                  </Option>
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

              <InputSumWrapper>
                <InputSum
                  type="number"
                  name="sum"
                  min="0"
                  step="0.01"
                  placeholder="0,00 UAH"
                />
                <Calculator>
                  <BiCalculator size={18} />
                </Calculator>
              </InputSumWrapper>
            </InputGroup>

            <ButtonGroup>
              <Button type="submit">Input</Button>
              <Button type="button">Clear</Button>
            </ButtonGroup>
          </Wrapper>
        )}
      </Formik>
    </>
  );
}
