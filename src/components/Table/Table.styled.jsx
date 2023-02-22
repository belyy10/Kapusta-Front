import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const TableBox = styled.table`
  max-height: 204px;

  border: none;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-spacing: 0;
  border-collapse: collapse;

  overflow: hidden;

  @media screen and (min-width: 1200px) {
    width: 624px;
  }

  @media screen and (min-width: 1200px) {
    width: 746px;
  }
`;

export const TableTitle = styled.tr``;

export const TableTitleItem = styled.th`
  width: calc(100% / 5);
  height: 40px;

  border-spacing: 0;

  background-color: ${COLORS.bgTableTitle};
  text-transform: uppercase;
`;
