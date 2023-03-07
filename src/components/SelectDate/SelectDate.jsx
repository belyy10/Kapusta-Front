import { useDispatch, useSelector } from 'react-redux';
import { InputDate, Label, Form } from './SelectDate.styled';
import { changeDate } from 'redux/transactions/transactionsSlice';
import { selectDate } from 'redux/transactions/transactionsSelectors';


export default function SelectDate() {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <Form>
      <Label>
        <InputDate
          name="date"
          type="date"
          min="1920-01-01"
          max={currentDate}
          value={date}
          onChange={e => dispatch(changeDate(e.target.value))}
        />
      </Label>
    </Form>
  );
}
