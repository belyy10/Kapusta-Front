import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiBarChartFill } from 'react-icons/ri';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import COLORS from 'variables/colors/colors';

export const MainInfo = styled.div`
display: flex;
justify-content: space-between;
margin: 40px 32px 60px;

@media screen and (min-width: 768px) {
max-width: 704px;
margin: 40px auto 60px;
}

@media screen and (min-width: 1200px) {
max-width: 1098px;}
margin: 40px auto 20px;
`

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
    /* position: absolute; */
    top: 103px;
    right: 37px;
    z-index: 20;
  }

  :hover,
  :focus {
    color: ${COLORS.activeColor};

    @media screen and (min-width: 1200px) {
      right: 37px;
    }
  }
`;

export const IconLink = styled(RiBarChartFill)`
  margin-left: 20px;
  color: ' #52555F';
  :hover,
  :focus {
    color: ${COLORS.activeColor};
  }
`;

export const LinkToMain = styled(Link)`
  text-decoration: none;
`;

export const IconLinkMain = styled(HiArrowNarrowLeft)`
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 15px;

  color: ${COLORS.activeColor};
`;
