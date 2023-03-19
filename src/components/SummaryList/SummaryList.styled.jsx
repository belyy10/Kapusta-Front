import styled from 'styled-components';
import COLORS from 'variables/colors/colors';


export const SummaryList = styled.li`
  height: 38px;
  border-bottom: 2px solid ${COLORS.whiteColor};
  padding-left: 22px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  font-style: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;
  color: ${COLORS.textColor};
`;

export const SummaryItem = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  font-style: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;
  color: ${COLORS.textColor};
`;

export const SummaryItemSpan = styled.p``;
