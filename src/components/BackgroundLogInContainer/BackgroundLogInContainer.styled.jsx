import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Container = styled.div`
  padding-bottom: 514px;
  background-color: ${COLORS.whiteColor};
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    background-image: url(${props => props.img});
    background-position: bottom left calc((100% - 320px) / 2 + 40px);
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 442px;

    background-image: url(${props => props.groupImg});

    background-position: bottom 90px left calc(((100% - 678px) / 2) - 30px);
  }

  @media screen and (min-width: 1200px) {
    padding-bottom: 268px;
    background-position: bottom 50px left calc((((1200px - 100%) / 2)) + 189px);
  }
`;

export const ContainerTop = styled.div`
  margin-left: auto;
  margin-right: auto;

  height: 320px;
  background-color: ${COLORS.backgroungColor};

  border-bottom-left-radius: 100px 100px;

  @media screen and (max-width: 767px) {
    background-image: url(${props => props.cabbage});
    background-position: top 104px right calc((100% - 320px) / 4);
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 768px) {
    height: 582px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top 28px left 10px;
  }

  @media screen and (min-width: 1200px) {
    height: 583px;
    background-size: contain;
  }
`;

export const ContainerUnder = styled.div``;
