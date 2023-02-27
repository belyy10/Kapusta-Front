import Container from 'components/Container';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserBalance } from 'redux/auth/authSelectors';
import { getDate } from 'redux/transactions/transactionsSelectors';
import { updateBalance } from 'redux/auth/authOperations';
import {
  fetchUserTransactions,
  fetchSummaryExpenses,
  fetchSummaryIncomes,
} from 'redux/transactions/transactionsOperations';
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
  const dispatch = useDispatch();
  const currentBalance = useSelector(selectUserBalance);

  const [value, setValue] = useState(0);
  const [tooltipOpen, setTooltipOpen] = useState(true);
  const [isSent, setIsSent] = useState(false);

  const handleClick = e => {
    setValue(+e.target.value.split(' ').join('').slice(0, -3));
    setIsSent(false);
  };

  const onInputHandler = e => {
    e.preventDefault();
    dispatch(updateBalance({ balance: value }));
    setIsSent(true);
    return;
  };

  return (
    <Container>
      <Wrapper>
        <Title>Balance:</Title>
        <Section onSubmit={onInputHandler} autoComplete="off">
          <Input
            type="number"
            placeholder="00.00 UAH"
            // value={value}
            onChange={handleClick}
          />

          <Button type="submit" disabled={!value || isSent}>
            Confirm
          </Button>
        </Section>
        {!currentBalance > 0 && (
          <Wrapper2 setTooltipOpen={setTooltipOpen}>
            <Text>
              Hello! To get started, enter the current balance of your account!
            </Text>
            <Styled>You can't spend money until you have it :{' ) '}</Styled>
          </Wrapper2>
        )}
      </Wrapper>
    </Container>
  );
}
