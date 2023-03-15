import COLORS from 'variables/colors/colors.js';
import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 134px;
  margin-left: auto;
  margin-right: auto;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${COLORS.activeColor};
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${COLORS.blackColor};
  text-transform: uppercase;
`;
