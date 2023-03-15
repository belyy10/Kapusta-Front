import styled from 'styled-components';
import COLORS from 'variables/colors/colors.js';

export const IconBox = styled.div`
  border-radius: 24px;

  background-color: ${props => props.isActive ? COLORS.activeColor : COLORS.bgTableTitle};
  color: ${props => props.isActive ? COLORS.whiteColor : COLORS.blackColor};

`