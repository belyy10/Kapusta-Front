import styled from 'styled-components';

export const ContainerTop = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 320px;

  height: 286px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 100px 100px;
  background-image: url('images/1.png');
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 526px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    height: 583px;
  }
`;

export const ContainerUnder = styled.div``;
