import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.p`
  padding-right: 20px;
  padding-left: 24px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.04;
  border-right: 1px solid ${COLORS.borderColor};
  color: ${COLORS.textColor};
`;

export const ExitBtn = styled.button`
  margin-left: 20px;
  text-decoration: underline;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.04;
  border: none;
  background-color: transparent;
  color: ${COLORS.textColor};
  cursor: pointer;

  :hover,
  :focus {
    color: ${COLORS.activeColor};
  }

  @media screen { max-width: 767px;}
  margin-left: 16px;
`;
