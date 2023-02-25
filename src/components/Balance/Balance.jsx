import Container from 'components/Container';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { balanceSelectors } from '../../redux/balance';
import balanceOperations from '../../redux/balance/balance-operations';
import { Wrapper, Button, Title, Section, Input, Wrapper2, Text, Styled,  } from './Balance.styled';

export default function Balance() {
  const dispatch = useDispatch();

  const currentBalance = useSelector(balanceSelectors.balanceCurrent);
  const balanceLoading = useSelector(balanceSelectors.balanceLoading);

  const [balance, setBalance] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const loadingMessage = 'loading...';

  // useEffect(() => {
  //   dispatch(balanceOperations.getBalance());
  // }, [dispatch]);

  useEffect(() => {
    setBalance(`${parseFloat(currentBalance).toFixed(2)} UAH` || '');
  }, [currentBalance]);

  const removeTooltip = () => {
    setTooltipOpen(false);
  };

  const handleClick = () => {
    dispatch(balanceOperations.updateBalance(parseFloat(balance)));
  };

  const enterKeyHandler = e => {
    if (e.code === 'Enter') {
      dispatch(balanceOperations.updateBalance(parseFloat(balance)));
      e.target.blur();
    }
  };

  const inputFocusHandler = e => {
    setBalance(parseFloat(e.target.value).toFixed(2));
  };

  const inputBlurHandler = () => {
    setBalance(`${parseFloat(balance).toFixed(2)} UAH`);
  };

  const onInputHandler = e => {
    setBalance(e.target.value);
  };

  return (
    <Container>
    <Wrapper>
      <Title>Баланс:</Title>
      <Section>
        <Input
          type="text"
          pattern="^[ 0-9]+$"
          placeholder="00.00 UAH"
          value={balanceLoading ? loadingMessage : balance}
          onChange={onInputHandler}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          onKeyDown={enterKeyHandler}
          />
        <Button type="button" onClick={handleClick}>
          Подтвердить
        </Button>
      </Section>

      {!parseFloat(balance) && !balanceLoading && tooltipOpen && (
        <Wrapper2  onClick={removeTooltip}>
          <Text>
          Hello! To get started, enter the current balance of your account!
          </Text>
          <Styled>
          You can't spend money until you have it :{' ) '}
          </Styled>
        </Wrapper2>
      )}
    </Wrapper>
      </Container>
  );
}
