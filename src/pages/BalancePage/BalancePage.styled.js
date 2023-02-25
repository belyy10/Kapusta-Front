import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;
