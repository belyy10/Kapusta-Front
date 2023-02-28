import Container from 'components/Container';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBalance } from 'redux/auth/authOperations';

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
import { useAuth } from 'hooks/useAuth';
import { selectUserBalance } from 'redux/auth/authSelectors';

export default function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(selectUserBalance);
  // const { balance } = useAuth();

  const [value, setValue] = useState({ balance } ?? 0);
  const [tooltipOpen, setTooltipOpen] = useState(true);

  useEffect(() => {
    setValue(balance);
  }, [balance]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateBalance({ balance: e.target.elements.balance.value }));
  };

  const onChange = e => {
    if (e.target.value < 0) {
      return;
    }
    setValue(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Balance:</Title>
        <Section autoComplete="off" onSubmit={onSubmit}>
          <Input
            type="number"
            placeholder={`${balance}.00 UAH`}
            name="balance"
            value={value || 0}
            disabled={balance > 0 ? true : false}
            onChange={onChange}
          />

          <Button type="submit" disabled={balance > 0 ? true : false}>
            Confirm
          </Button>
        </Section>
        {!balance > 0 && (
          <Wrapper2 active={tooltipOpen} setActive={setTooltipOpen}>
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
