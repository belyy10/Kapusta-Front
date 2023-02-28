import Container from 'components/Container';
import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectUserBalance } from 'redux/auth/authSelectors';
// import { getDate } from 'redux/transactions/transactionsSelectors';
// import { updateBalance } from 'redux/auth/authOperations';
// import {
//   fetchUserTransactions,
//   fetchSummaryExpenses,
//   fetchSummaryIncomes,
// } from 'redux/transactions/transactionsOperations';
import {
  Wrapper,
  Button,
  Title,
  Section,
  Input,
  Wrapper2,
  Text,
  Styled,
} from './Balance.styled';

export default function Balance() {
  // const dispatch = useDispatch();
  // const balance = useSelector(selectUserBalance);
  // const token = useSelector(state => state.auth.user.accessToken);

  // const [value, setValue] = useState(balance ?? 0);
  // const [tooltipOpen, setTooltipOpen] = useState(true);
  // const [isSent, setIsSent] = useState(false);

  // const onBlur = e => {
  //   const data = e.target.value.split(' ').join('');
  //   setValue(data);
  //   setIsSent(false);
  // };

  // const onClick = () => {
  //   dispatch(updateBalance({ value, token }));
  //   setIsSent(true);
  // };

  return (
    <Container>
      <Wrapper>
        <Title>Balance:</Title>
        <Section autoComplete="off">
          <Input
          // type="number"
          // placeholder="00.00 UAH"
          // value={value}
          // onBlur={onBlur}
          />

          {/* <Button type="button" onClick={onClick}> */}
          <Button type="button">Confirm</Button>
        </Section>
        {/* {!balance > 0 && ( */}
        {/* <Wrapper2> */}
        {/* <Wrapper2 setTooltipOpen={setTooltipOpen}> */}
        {/* <Text> */}
        {/* Hello! To get started, enter the current balance of your account! */}
        {/* </Text> */}
        {/* <Styled>You can't spend money until you have it :{' ) '}</Styled> */}
        {/* </Wrapper2> */}
        {/* )} */}
      </Wrapper>
    </Container>
  );
}
