import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  width: 1034px;
  background-color: ${COLORS.whiteColor};
`;

export const ChoseBox = styled.div`
  display: flex;
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
