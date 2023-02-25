import { Formik } from 'formik';

import {
  Form,
  Label,
  Input,
  InputDescription,
  InputSum,
  ButtonGroup,
  Button,
  SelectCategory,
  Option,
} from './Expenses.styled';

export default function CreateExpenses() {
  return (
    <>
      <Formik>
        <Form>
          <Label>
            <Input type="date" min="1920-01-01" max="Date.now()" />
          </Label>
          <Label>
            <InputDescription
              type="text"
              name="description"
              placeholder="Product description"
            />
          </Label>

          <SelectCategory name="category" laceholder="Product category">
            <Option disabled selected>
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

          <Label>
            <InputSum
              type="number"
              name="sum"
              min="0"
              step="0.01"
              placeholder="0,00"
            />
          </Label>
          <ButtonGroup>
            <Button type="submit">Input</Button>
            <Button type="button">Clear</Button>
          </ButtonGroup>
        </Form>
      </Formik>
    </>
  );
}
