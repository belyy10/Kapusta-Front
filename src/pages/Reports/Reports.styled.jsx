import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HiArrowNarrowLeft } from 'react-icons/hi';
import COLORS from 'variables/colors/colors';

export const LinkToMain = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 10px;
  text-decoration: none;

  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);

  letter-spacing: 0.04;

  color: rgba(82, 85, 95, 0.7);

  @media screen and (min-width: 678px) {
    position: absolute;
    top: 112px;
    left: calc((100% - 704px) / 2);
    z-index: 20;
  }

  @media screen and (min-width: 1200px) {
    left: calc((100% - 1034px) / 2);
  }
`;

export const IconLink = styled(HiArrowNarrowLeft)`
  margin-right: 20px;
  color: ${COLORS.activeColor};
`;

export const IconLinkMain = styled(HiArrowNarrowLeft)`
  margin-left: 22px;
  margin-bottom: 20px;
  margin-top: 12px;

  color: ${COLORS.activeColor};
`;
