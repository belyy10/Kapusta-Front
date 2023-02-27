import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  color: #52555f;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const Wrapper = styled.div`
  padding: 50px 20px 60px;
  @media screen and (min-width: 768px) {
    padding: 50px 58px 60px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const CloseButton = styled.button`
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
