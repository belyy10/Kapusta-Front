import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import COLORS from 'variables/colors/colors';

export const SwagerBox = styled.div`
  width: 180px;
 
  @media screen and (max-width: 768px) {
    margin: 22px auto 32px;
   
  }

  @media screen and (min-width: 768px) {
      position: absolute;
    right: calc((100% - 750px) / 2);
    top: 100px;
     right: 32px;
  }

  @media screen and (min-width: 1200px) {
      position: absolute;
       top: 100px;
        right: 75px;
    right: calc((100% - 1034px) / 2);
  }
`;

export const SwagerTitle = styled.p`
  padding-bottom: 5px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.04;

  color: rgba(82, 85, 95, 0.7);
`;

export const Slide = styled(SwiperSlide)`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02;
  text-transform: uppercase;

  text-align: center;

  color: ${COLORS.blackColor};
`;
