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
  height: 296px;
  background-color: ${COLORS.bgTableTitle};
  border-bottom-left-radius: 100px 100px;
`;

export const MobileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LinkToTransaction = styled(Link)`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
  text-decoration: none;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  line-height: calc(14 / 12);
  letter-spacing: 0.02;
  color: ${COLORS.blackColor};
`;

export const LinkToReport = styled(Link)`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.02;
  color: ${COLORS.textColorOpacity};

  &:hover,
  :focus {
    color: ${COLORS.activeColor};
  }
`;

export const IconLink = styled(HiArrowNarrowLeft)`
  margin-right: 6px;
  color: ${COLORS.activeColor};
`;

export const IconLinkReport = styled(RiBarChartFill)`
  margin-left: 20px;
`;

export const InputDate = styled.input`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 60px;
  height: 44px;
  border: none;
  outline: none;

  background-color: transparent;
  color: #52555f;
  text-align: center;
`;
