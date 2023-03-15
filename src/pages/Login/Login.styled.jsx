import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 320px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0;
    margin-right: 91px;
    padding-top: 117px;
    justify-content: flex-end;
  }
`;
