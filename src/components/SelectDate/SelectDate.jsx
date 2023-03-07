import { InputDate, Label, Form } from './SelectDate.styled';
// import moment from 'moment';
// import { useState } from 'react';

export default function SelectDate(props) {
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <Form>
      <Label>
        <InputDate
          name="date"
          type="date"
          min="1920-01-01"
          max={currentDate}
          onChange={props.handleDateChange}
        />
      </Label>
    </Form>
  );
}
