import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HiArrowNarrowLeft } from 'react-icons/hi';
import COLORS from 'variables/colors/colors';

export const LinkToMain = styled(Link)`
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

  @media screen and (min-width: 678px) {
    position: absolute;
    top: 57px;
    left: 0;
    z-index: 20;
  }
`;

export const IconLink = styled(HiArrowNarrowLeft)`
  margin-right: 20px;
  color: ${COLORS.activeColor};
`;
