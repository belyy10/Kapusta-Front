import styled from 'styled-components';

export const ContainerBox = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
  }
`;
