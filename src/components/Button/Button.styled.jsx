import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Button = styled.button`
  width: 125px;
  height: 44px;
  background: ${COLORS.whiteColor};
  border-radius: 16px;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${COLORS.textColor};
  border: 2px solid #f6f7fc;
  text-align: center;
  transition: background 400ms ease-in-out, color 400ms ease-in-out;

  &:not(:last-child) {
    margin-right: 15px;
  }

  :hover,
  :focus {
    background: ${COLORS.activeColor};
    color: ${COLORS.whiteColor};
  }
`;
