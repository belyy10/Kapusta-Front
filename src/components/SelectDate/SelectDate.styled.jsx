import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Form = styled.form`
`;

export const InputDate = styled.input`
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    height: 40px;
    width: 100px;
    border: 2px solid transparent;
    outline: none;
    background-color: transparent;
    color: #52555f;
    font-weight: 900;
    font-size: 12px;
    font-style: Roboto;
    text-align: center;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    height: 44px;
    width: 93px;
    border: 2px solid white;
    outline: none;
    background-color: ${COLORS.whiteColor};
    color: #52555f;
    font-weight: 900;
    font-size: 12px;
    font-style: Roboto;
    text-align: center;
    margin-bottom: 0px;
  }
`;

export const Label = styled.label`
  display: flex;
  position: relative;
`;
