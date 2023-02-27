import { ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const GraphicBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  width: 704px;
  height: 422px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;

  background-color: ${COLORS.whiteColor};

  @media screen and (min-width: 1200px) {
    width: 1034px;
  }
`;

export const GraphicMobileBox = styled(ResponsiveContainer)`
  display: flex;

  padding: 20px 0;
  width: 320px;

  @media (min-width: 481px) and (max-width: 767px) {
    width: 480px;
  }
`;
