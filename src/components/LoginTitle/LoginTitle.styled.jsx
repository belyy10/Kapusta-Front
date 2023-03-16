import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const TitleBox = styled.div`
  @media screen and (min-width: 320px) {
    width: 183px;
    padding-top: 86px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    width: 306px;
    padding-top: 80px;
  }

  @media screen and (min-width: 1200px) {
    width: 377px;
    position: absolute;
    top: 308px;
    left: 189px;
  }
`;

export const Title = styled.h1`
  display: flex;

  color: ${COLORS.blackColor};

  font-weight: 900;
  font-size: 102px;
  line-height: calc(120 / 102);
  letter-spacing: 0.18;
`;

export const SpanTitle = styled.span`
  position: relative;

  ::before {
    content: '';
    width: 8px;
    height: 13px;
    position: absolute;
    right: calc((100% - 8px) / 2);
    top: 33px;
    background-color: ${COLORS.blackColor};
  }

  ::after {
    content: '';
    width: 8px;
    height: 13px;
    position: absolute;
    bottom: 0;
    right: calc((100% - 8px) / 2);
    bottom: 8px;
    background-color: ${COLORS.blackColor};
  }
`;

export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  line-height: calc(19 / 16);
  letter-spacing: 0.18;
  text-align: center;
  text-transform: uppercase;
  color: ${COLORS.textColor};

  @media screen and (min-width: 767px) {
    font-size: 13px;
    letter-spacing: 0.15;
  }
`;
