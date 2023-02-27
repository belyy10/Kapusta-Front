import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  padding: 20px 0;

  width: 1034px;
  background-color: ${COLORS.whiteColor};
`;

export const ChoseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const ChosenTitle = styled.p`
  padding: 0 16px;

  font-family: 'Roboto';

  font-weight: 700;
  font-size: 14px;
  line-height: calc(16 / 14);

  letter-spacing: 0.02;
  text-transform: uppercase;

  color: ${COLORS.blackColor};
`;

export const ChoseBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const BtnList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 52px;

  list-style: none;
  padding: 20px 224px;
`;

export const Btn = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
`;

export const BtnTitle = styled.span`
  display: block;
`;
