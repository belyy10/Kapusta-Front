import styled from 'styled-components';
import COLORS from 'variables/colors/colors';
import { Form, Field } from 'formik';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 280px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 704px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    width: 1098px;
    align-item: center;
    margin-bottom: 60px;
  }
`;

export const Wrapper = styled(Form)`
  display: flex;
  position: relative;
  margin: 0 auto;
  flex-direction: column;
  width: 280px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 704px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    width: 1098px;
    align-item: center;
    margin-bottom: 60px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
  }
`;

export const Label = styled.label`
  display: flex;
  position: relative;
`;

export const InputDescription = styled(Field)`
  padding-left: 20px;
  height: 44px;
  width: 280px;
  border: 2px solid ${COLORS.whiteColor};
  outline: none;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: transparent;

  ::placeholder {
    color: #c7ccdc;
  }

  @media screen and (min-width: 768px) {
    width: 184px;
    border: 2px solid #f5f6fb;
    border-top-left-radius: 16px;
    border-top-right-radius: 0px;
    background-color: ${COLORS.whiteColor};
  }
  @media screen and (min-width: 1200px) {
    width: 290px;
  }
`;

export const InputDate = styled(Field)`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    height: 44px;
    width: 119px;
    border: 2px solid white;
    outline: none;
    background-color: ${COLORS.whiteColor};
    color: ${COLORS.textColor};
    font-weight: 900;
    font-size: 12px;
    font-style: Roboto;
    text-align: center;
  }
`;


export const InputSumWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    margin-bottom: 80px;
    margin-top: 32px;
    position: relative;
  }
  @media screen and (min-width: 768px) {
    position: relative;
  }
`;

export const InputSum = styled(Field)`
  background-color: transparent;
  height: 44px;
  width: 125px;
  border: 2px solid ${COLORS.whiteColor};
  outline: none;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  color: ${COLORS.textColor};

  ::placeholder {
    color: ${COLORS.blackColor};
    font-weight: 700;
    font-size: 12px;
    line-height: 14.06;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: 0px;
    width: 119px;
    border: 2px solid ${COLORS.bgTableTitle};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 16px;
    background-color: ${COLORS.whiteColor};

    ::placeholder {
      color: ${COLORS.blackColor};
      font-weight: 700;
      font-size: 12px;
      line-height: 14.06;
    }
  }
`;

export const Calculator = styled.span`
  @media screen and (max-width: 767px) {
    width: 60px;
    height: 46px;
    display: flex;
    background-color: transparent;
    border: 2px solid #ffffff;
    outline: none;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 16px;
    left: 88px;
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: center;
  }
`;

export const SelectCategory = styled.select`
  padding-left: 20px;
  height: 50px;
  width: 306px;
  border: 2px solid #ffffff;
  outline: none;
  background-color: transparent;
  color: #c7ccdc;
  border-bottom-right-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 186px;
    border: 2px solid #f5f6fb;
    outline: none;
    background-color: ${COLORS.whiteColor};
    border-bottom-right-radius: 0px;
  }
  @media screen and (min-width: 1200px) {
    width: 169px;
  }
`;

export const Option = styled.option`
  margin: 15px;
  outline: none;
  background-color: ${COLORS.whiteColor};
  color: #c7ccdc;
  text-align: left;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 0px;
    margin-left: 32px;
  }
`;

export const ButtonInput = styled.button`
  width: 130px;
  height: 44px;
  border: none;
  border-radius: 16px;
  box-shadow: 1px 3px 7px rgba(170, 178, 197, 0.4);
  background-color: ${COLORS.activeColor};
  color: ${COLORS.whiteColor};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  align-self: center;
  transition: background-color 400ms ease-in-out, color 400ms ease-in-out,
    box-shadow 400ms ease-in-out;

  :not(:first-child) {
    margin-left: 20px;
  }

  :hover,
  :focus {
    background-color: ${COLORS.activeColor};
    color: ${COLORS.whiteColor};
    box-shadow: 1px 3px 7px rgba(255, 119, 8, 0.4);
  }

  @media screen and (min-width: 768px) {
    width: 125px;

    :not(:first-child) {
      margin-left: 15px;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 136px;
    :not(:first-child) {
      margin-left: 16px;
    }
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 44px;
  border: none;
  border-radius: 16px;
  box-shadow: 1px 3px 7px rgba(170, 178, 197, 0.4);
  background-color: ${COLORS.backgroungColor};
  color: ${COLORS.textColor};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  align-self: center;
  transition: background-color 400ms ease-in-out, color 400ms ease-in-out,
    box-shadow 400ms ease-in-out;

  :not(:first-child) {
    margin-left: 20px;
  }

  :hover,
  :focus {
    background-color: ${COLORS.activeColor};
    color: ${COLORS.whiteColor};
    box-shadow: 1px 3px 7px rgba(255, 119, 8, 0.4);
  }

  @media screen and (min-width: 768px) {
    width: 125px;

    :not(:first-child) {
      margin-left: 15px;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 136px;
    :not(:first-child) {
      margin-left: 16px;
    }
  }
`;

export const Error = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    font-size: 9px;
    letter-spacing: 0.04em;
    color: #eb5757;
    top: 53px;
    left: 20px;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    font-size: 10px;
    letter-spacing: 0.04em;
    color: #eb5757;
    top: 53px;
    left: 20px;
  }
`;
