// import { Container } from 'common';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HiArrowNarrowLeft } from 'react-icons/hi';
import COLORS from 'variables/colors/colors';

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-top: 56px;
  padding-top: 30px;
  padding-left: 52px;
  padding-right: 52px;
  padding-bottom: 57px;
`;

export const MobileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
`;

export const LinkToTransaction = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  font-family: 'Roboto';

  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  /* identical to box height */

  letter-spacing: 0.04;

  color: rgba(82, 85, 95, 0.7);
`;

export const IconLink = styled(HiArrowNarrowLeft)`
  margin-right: 20px;
  color: ${COLORS.activeColor};
`;
