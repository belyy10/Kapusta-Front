import styled, { keyframes } from 'styled-components';
import COLORS from 'variables/colors/colors';
import { Field, Form } from 'formik';
import { fadeInLeft, fadeInRight } from 'react-animations';

const animation2 = keyframes`${fadeInLeft}`;
const animation3 = keyframes`${fadeInRight}`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 40px 20px;
  background-color: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 260px;
    padding: 56px 83px;
  }
`;

export const Title = styled.p`
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: ${COLORS.textColor};
  animation: 1s ${animation2};

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  animation: 1s ${animation3};
`;

export const LabelText = styled.label`
  margin-bottom: 16px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${COLORS.blackColor};

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Input = styled(Field)`
  padding: 17px 19px;
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: ${COLORS.backgroungColor};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 116px;
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
  transition: background-color 400ms ease-in-out, color 400ms ease-in-out,
    box-shadow 400ms ease-in-out;
  animation: 1s ${animation2};

  :hover,
  :focus {
    background-color: ${COLORS.activeColor};
    color: ${COLORS.whiteColor};
    box-shadow: 1px 3px 7px rgba(255, 119, 8, 0.4);
  }

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;
export const Error = styled.div`
  position: relative;
  margin-top: -15px;
  margin-bottom: 16px;
  margin-left: 20px;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: #eb5757;

  ::before {
    position: absolute;
    top: -81px;
    left: -25px;
    content: '*';
  }
`;
