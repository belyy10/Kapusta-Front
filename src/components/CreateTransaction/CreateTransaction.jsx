// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { Formik } from 'formik';
import { useState } from 'react';
import { BiCalculator } from 'react-icons/bi';
// import schemaTransactions from 'schema/schemaTransactions';

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
} from './CreateTransaction.styled';

const initialValues = {
  date: new Date(),
  description: '',
  category: '',
  sum: 0,
};

export default function CreateTransaction() {
  const currentDate = new Date().toISOString().slice(0, 10);

  // const dispatch = useDispatch();

  // const [data, setData] = useState({});

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  // const reset = () => {
  //   setData({});
  // };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={schemaTransactions}
        onSubmit={handleSubmit}
      >
        <Wrapper>
          <InputGroup>
            <Label>
              <InputDate
                name="date"
                type="date"
                min="1920-01-01"
                max={currentDate}
                value={new Date().toLocaleDateString('sv').split(' ')[0]}
              />
            </Label>
            <Label>
              <InputDescription
                type="text"
                name="description"
                placeholder="Product description"
              />
            </Label>

            <SelectCategory name="category" as="select">
              <Option disabled value="Product category">
                Product category
              </Option>
              <Option value="transport">Transport</Option>
              <Option value="products">Products</Option>
              <Option value="healthm">Health</Option>
              <Option value="alcohol">Alcohol</Option>
              <Option value="entertainment">Entertainment</Option>
              <Option value="housing">Housing</Option>
              <Option value="technique">Technique</Option>
              <Option value="communal">Communal, communication</Option>
              <Option value="sports">Sports, hobbies</Option>
              <Option value="education">Education</Option>
              <Option value="other">Other</Option>
            </SelectCategory>

            <InputSumWrapper>
              <InputSum
                type="number"
                name="sum"
                min="0.00"
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
      </Formik>
    </>
  );
}
