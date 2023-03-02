import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const TableBodyList = styled.tr`
  height: 40px;
  border: 2px solid ${COLORS.bgTableTitle};

  @media screen and (min-width: 768px) {
    width: 624px;
  }

  @media screen and (min-width: 1200px) {
    width: 746px;
  }
`;

export const TableBodyItem = styled.td`
  height: 100%;
  width: calc(624px / 5);

  @media screen and (min-width: 1200px) {
    width: calc(746px / 5);
  }

  text-align: center;

  font-style: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.04em;

  color: ${COLORS.textColor};

  :nth-child(4) {
    font-weight: 700;
    color: ${props =>
      props.isExpenses ? COLORS.redColorExpenses : COLORS.greenColor};
  }
  :nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;

  background-color: ${COLORS.bgTableTitle};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${COLORS.activeColor};
  }
`;
