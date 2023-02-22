import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 40px 20px;
  background-color: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 260px;
    padding: 56px 83px;
  }
`;

export const Google = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px;
`;

export const TitleGoogle = styled.p`
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${COLORS.textColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const ButtonGoogle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 40px;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14x;
  letter-spacing: 0.02em;
  color: ${COLORS.blackColor};
  background-color: ${COLORS.backgroungColor};
  border-radius: 26px;
  border: none;
  box-shadow: 1px 3px 7px rgba(170, 178, 197, 0.4);
`;

export const Title = styled.p`
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: ${COLORS.textColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const TextGoogle = styled.p`
  margin-left: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LabelText = styled.label`
  margin-bottom: 16px;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${COLORS.blackColor};

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 17px 19px;
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: ${COLORS.backgroungColor};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
`;

export const ButtonLogin = styled.button`
  width: 116px;
  height: 44px;
  background-color: ${COLORS.activeColor};
  color: ${COLORS.whiteColor};
  border: none;
  border-radius: 16px;
  box-shadow: 1px 3px 7px rgba(255, 119, 8, 0.4);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;

export const ButtonReg = styled.button`
  width: 116px;
  height: 44px;
  background-color: ${COLORS.backgroungColor};
  color: ${COLORS.textColor};
  border-radius: 16px;
  border: none;
  box-shadow: 1px 3px 7px rgba(170, 178, 197, 0.4);
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 122px;
  }
`;
