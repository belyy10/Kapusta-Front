import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiBarChartFill } from 'react-icons/ri';

export const LinkReport = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;

  text-decoration: none;
  font-family: 'Roboto';

  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);

  letter-spacing: 0.04;

  color: rgba(82, 85, 95, 0.7);

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 57px;
    right: 50px;
    z-index: 20;
  }
`;

export const IconLink = styled(RiBarChartFill)`
  margin-left: 20px;
`;
