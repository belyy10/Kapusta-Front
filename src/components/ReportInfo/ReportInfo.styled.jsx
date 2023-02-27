import COLORS from 'variables/colors/colors.js';
import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 85px;
  border-radius: 20px;
  margin-bottom: 32px;
  background: ${COLORS.whiteColor};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);

  @media screen and (min-width: 772px) {
    height: 50px;
    border-radius: 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    width: 1034px;
    margin-left: auto;
    margin-right: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 2);
    height: 100%;

    :first-child {
      border-right: 1px solid #e0e5eb;
    }

    @media screen and (min-width: 772px) {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const ItemText = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${COLORS.textColor};

  @media screen and (min-width: 772px) {
    margin-right: 15px;
    font-size: 14px;
  }
`;

export const Sum = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${({ type }) =>
    type === 'expenses'
      ? 'COLORS.redColorExpenses'
      : 'COLORS.greenColorIncoms'};
`;
