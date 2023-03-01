import COLORS from 'variables/colors/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HiArrowNarrowLeft } from 'react-icons/hi';
import { RiBarChartFill } from 'react-icons/ri';

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-top: 19px;
`;

export const MobileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
`;

export const LinkToTransaction = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  text-decoration: none;
  font-family: 'Roboto';
  text-transform: uppercase;

  font-weight: 700;
  font-size: 10px;
  line-height: calc(14 / 12);
  /* identical to box height */

  letter-spacing: 0.02;

  color: ${COLORS.blackColor};
`;

export const LinkToReport = styled(Link)`
display: flex;
align-items: center;
margin-bottom: 35px;
margin-left: auto;
margin-right: auto;

text-decoration: none;
font-family: 'Roboto';

font-weight: 400;
font-size: 12px;
line-height: calc(14 / 12);
/* identical to box height */

letter-spacing: 0.02;

color: rgba(82, 85, 95, 0.7);`

export const IconLink = styled(HiArrowNarrowLeft)`
  margin-right: 6px;
  // margin-left: 22px;
  color: ${COLORS.activeColor};
`;

export const IconLinkReport = styled(RiBarChartFill)`
  margin-left: 20px;
`;

export const InputDate = styled.input`
  // margin-right: 16px;
  height: 44px;
  width: 119px;
  border: 2px solid white;
  outline: none;

  background-color: ${COLORS.whiteColor};
  color: #52555f;
  text-align: center;
`;
