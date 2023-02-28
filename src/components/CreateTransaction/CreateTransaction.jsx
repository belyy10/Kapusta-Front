
import { useState } from 'react';
// import axios from 'axios';
import { Formik, ErrorMessage } from 'formik';

// import { useDispatch } from 'react-redux';


import { BiCalculator } from 'react-icons/bi';
import schemaTransactions from 'schema/schemaTransactions';

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

const initialValues = {
  date: new Date(),
  description: '',

  category: null,

  sum: 0,
};

export default function CreateTransaction() {
  const currentDate = new Date().toISOString().slice(0, 10);

  const [data, setData] = useState({});

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setData(values);
    resetForm();
  };
  console.log(data);
  // axios
  //   .post(
  //     'https://kapusta-deployment.onrender.com/api/transactions/expenses',
  //     data
  //   )
  //   .then(response => {
  //     console.log('Data sent successfully', response);
  //     setData({});
  //   })
  //   .catch(error => {
  //     console.error('Error while sending data', error);
  //   });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaTransactions}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Wrapper>
            <InputGroup>
              <Label>
                <InputDate
                  name="date"
                  type="date"
                  min="1920-01-01"
                  max={currentDate}
                  defaultValue={
                    new Date().toLocaleDateString('sv').split(' ')[0]
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

              <SelectCategory
                name="category"
                as="select"
                onChange={handleChange}
              >
                <Option disabled selected="Product category">
                  Product category
                </Option>
                <Option value="transport">Transport</Option>
                <Option value="products">Products</Option>
                <Option value="health">Health</Option>
                <Option value="alcohol">Alcohol</Option>
                <Option value="entertainment">Entertainment</Option>
                <Option value="housing">Housing</Option>
                <Option value="technique">Technique</Option>
                <Option value="communal">Communal, communication</Option>
                <Option value="sports">Sports, hobbies</Option>
                <Option value="education">Education</Option>
                <Option value="other">Other</Option>
              </SelectCategory>
              <ErrorMessage
                name="category"
                render={msg => <Error>{msg}</Error>}


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
