import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const TransactionsWrapper = styled.section`
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    width: 704px;
    padding: 24px 40px 42px 40px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${COLORS.whiteColor};
    box-shadow: 0px 10px 60px rgba(170, 178, W197, 0.2);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: 1098px;
    padding: 32px 32px;
  }
`;

export const Expenses = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 138px;
    higth: 40px;
    display: inline-block;
    position: absolute;
    top: -40px;
    left: 0px;
    padding: 10px 20px;
    background-color: #fefefe;
    color: ${COLORS.blackColor};
    font-weight: bold;
    text-align: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
`;

export const Incomes = styled.a`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 138px;
    higth: 40px;
    display: inline-block;
    position: absolute;
    top: -40px;
    left: 180px;
    padding: 10px 20px;
    background-color: #fefefe;
    color: ${COLORS.blackColor};
    font-weight: bold;
    text-align: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }
`;
