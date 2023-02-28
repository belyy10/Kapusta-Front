import styled from 'styled-components';

export const ContainerBox = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  background: #f2f5fc;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    padding-right: 123px;
    padding-left: 123px;
  }
`;
