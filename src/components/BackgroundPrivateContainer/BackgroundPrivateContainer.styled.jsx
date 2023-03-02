import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Container = styled.div`
  padding-bottom: 514px;
  background-color: ${COLORS.whiteColor};

  @media screen and (min-width: 768px) {
    padding-bottom: 442px;

    background-image: url(${props => props.groupImg});
    background-repeat: no-repeat;
    background-position: bottom 59px right calc(((100% - 678px)));
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${props => props.img});
    padding-bottom: 268px;
    background-position: bottom right;
  }
`;

export const ContainerTop = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left:20px;
  padding-right:20px;

  height: 258px;
  background-color: #f5f6fb;

  border-bottom-left-radius: 100px 100px;

  @media screen and (min-width: 768px) {
    height: 582px;
    padding-left:0;
    padding-right:0px;
  }

  @media screen and (min-width: 1200px) {
    height: 583px;
    padding-left:0;
    padding-right:0px;
  }
`;

export const ContainerUnder = styled.div``;
