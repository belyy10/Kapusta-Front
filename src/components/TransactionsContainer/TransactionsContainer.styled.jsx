import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const TransactionsWrapper = styled.section`
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    /* margin-top: 60px; */
    width: 640px;
    padding: 24px 40px 42px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
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

export const Expenses = styled.button`
font-family:  Roboto, sans-serif;
text-transform: uppercase;
font-size: 12px;
line-height: 1.167;
font-weight: 700;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 138px;
    higth: 40px;
    display: inline-block;
    position: absolute;
    top: -38px;
    left: 0px;
    padding: 10px 20px;
    background-color: #fefefe;
    color: ${props =>
      props.isActive ? COLORS.activeColor : COLORS.blackColor};
    font-weight: bold;
    text-align: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border: transparent;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
  }
`;

export const Incomes = styled.button`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-transform: uppercase;
font-size: 12px;
line-height: 1.167;
font-weight: 700;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 138px;
    higth: 40px;
    display: inline-block;
    position: absolute;
    top: -38px;
    left: 138px;
    padding: 10px 20px;
    background-color: #fefefe;
    color: ${props =>
      props.isActive ? COLORS.activeColor : COLORS.blackColor};
    font-weight: bold;
    text-align: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
    border: transparent;
  }
`;
