import COLORS from 'variables/colors/colors.js';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
`;

export const Btn = styled.button`
  width: calc(calc(100vw / 2) - 1px);
  height: 53px;
  border: none;

  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;

  color: ${COLORS.blackColor};
  background-color: ${COLORS.bgTableTitle};

  transition: 0.2s ease-out;

  &:first-child {
    margin-right: 4px;
  }

  &:hover,
  &:focus,
  &.active {
    color: ${COLORS.whiteColor};
    background-color: ${COLORS.activeColor};
  }
`;
