import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiBarChartFill } from 'react-icons/ri';

export const LinkReport = styled(Link)`
  position: absolute;
  top: 57px;
  right: 0;

  display: flex;
  align-items: center;

  text-decoration: none;
  font-family: 'Roboto';

  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);

  letter-spacing: 0.04;

  color: rgba(82, 85, 95, 0.7);
`;

export const IconLink = styled(RiBarChartFill)`
  margin-left: 20px;
`;
