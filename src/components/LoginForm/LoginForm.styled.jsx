import styled, { keyframes } from 'styled-components';
import COLORS from 'variables/colors/colors';
import { Field } from 'formik';
import { fadeInLeft, fadeInRight } from 'react-animations';

const animation2 = keyframes`${fadeInLeft}`;
const animation3 = keyframes`${fadeInRight}`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 40px 20px;
  background-color:  ${COLORS.whiteColor};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 260px;
    padding: 56px 83px;
  }
`;

export const Google = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px;
  animation: 1s ${animation2};
`;

export const TitleGoogle = styled.p`
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${COLORS.textColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const ButtonGoogle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 40px;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14x;
  letter-spacing: 0.02em;
  color: ${COLORS.blackColor};
  background-color: ${COLORS.backgroungColor};
  border-radius: 26px;
  border: none;
  box-shadow: 1px 3px 7px rgba(170, 178, 197, 0.4);
  transition: box-shadow 400ms ease-in-out;
  text-decoration: none;

  :hover,
  :focus {
    box-shadow: 1px 3px 7px rgba(119, 125, 138, 0.466);
  }
`;

export const Title = styled.p`
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: ${COLORS.textColor};
  animation: 1s ${animation3};

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const TextGoogle = styled.p`
  margin-left: 10px;
  text-decoration: none;
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
  :focus,
  :active:first-child {
    background-color: ${COLORS.activeColor};
    color: ${COLORS.whiteColor};
    box-shadow: 1px 3px 7px rgba(255, 119, 8, 0.4);
  }

  /* {
    :active
  } */
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
  color: ${COLORS.redColorText};

  ::before {
    position: absolute;
    top: -81px;
    left: -25px;
    content: '*';
  }
`;
