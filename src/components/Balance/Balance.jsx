import Container from 'components/Container';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  InputContainer,
  Label,
} from './Balance.styled';
import { useAuth } from 'hooks/useAuth';

export default function Balance() {
  const dispatch = useDispatch();
  const { balance } = useAuth();

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
          <InputContainer>
            <Input
              type="number"
              placeholder={`0.00`}
              name="balance"
              value={value}
              readOnly={balance}
              pattern="[0-9, UAH]"
              disabled={balance > 0 ? true : false}
              onChange={onChange}
            />
            <Label>UAH</Label>
          </InputContainer>

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
