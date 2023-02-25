import styled from 'styled-components';

export const ContainerTop = styled.div`
  margin-left: auto;
  margin-right: auto;

  height: 286px;
  background-color: #f5f6fb;

  border-bottom-left-radius: 100px 100px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top 28px left 10px;
  /* z-index: 100; */

  @media screen and (min-width: 768px) {
    height: 526px;
  }

  @media screen and (min-width: 1200px) {
    height: 583px;
  }
`;

export const ContainerUnder = styled.div``;
