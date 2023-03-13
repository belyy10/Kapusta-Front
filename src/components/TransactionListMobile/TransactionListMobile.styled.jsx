import styled from 'styled-components';
import COLORS from '../../variables/colors/colors';

export const TransactionUl = styled.ul`
  margin-bottom: 55px;
`;

export const TransactionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 0;
  border-bottom: 1px solid ${COLORS.bgTableTitle};
`;

export const TransactionDescription = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.04em;

  color: ${COLORS.textColor};
`;

export const TransactionInfoBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 4px;
`;

export const TransactionInfo = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: calc(9 / 8);
  letter-spacing: 0.04em;

  color: ${COLORS.textColor};
`;

export const TransactionBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const TransactionSum = styled.p`
  font-family: 'Roboto';

  font-weight: 700;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.04em;

  color: ${props => (props.isExpenses ? COLORS.redColor : COLORS.greenColor)};
`;

export const TransactionDeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;
