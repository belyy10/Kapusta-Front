import styled from 'styled-components';
import { textColor } from 'variables/colors/colors';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.p`
  padding-right: 20px;
  padding-left: 24px;

  border-right: 1px solid #e0e5eb;
  color: ${textColor};
`;

export const ExitBtn = styled.button`
  margin-left: 20px;

  border: none;
  background-color: transparent;
  text-decoration: underline;
  color: ${textColor};
`;
