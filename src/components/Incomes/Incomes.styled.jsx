import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Form = styled.form`
  display: flex;
  width: 1098px;
  padding: 32px 32px;
  background-color: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;

  //   @media screen and (min-width: 768px) {
  //     width: 260px;
  //     padding: 56px 83px;
  //   }
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 20px;
`;

//   @media screen and (min-width: 768px) {
//     font-size: 12px;
//   }

export const InputDescription = styled.input`
  padding-left: 20px;
  height: 44px;
  width: 290px;
  border: 2px solid #f5f6fb;
  outline: none;
  border-top-left-radius: 16px;
  background-color: ${COLORS.whiteColor};

  ::placeholder {
    color: #c7ccdc;
  }
`;

export const Input = styled.input`
  //   padding: 17px 19px;
  //   border: #f5f6fb;
  //   outline: none;
  //   border-bottom-left-radius: 30px;
  //   background-color: ${COLORS.backgroungColor};
`;

export const InputSum = styled.input`
  margin-right: 16px;
  height: 44px;
  width: 119px;
  border: 2px solid #f5f6fb;
  outline: none;
  border-top-right-radius: 16px;
  background-color: ${COLORS.whiteColor};
  color: #c7ccdc;
  text-align: center;
`;

export const SelectCategory = styled.select`
  padding-left: 20px;
  height: 50px;
  width: 169px;
  border: 2px solid #f5f6fb;
  outline: none;
  background-color: ${COLORS.whiteColor};
  color: #c7ccdc;
`;

export const Option = styled.option`
  margin: 15px;
  outline: none;
  background-color: ${COLORS.whiteColor};
  color: #c7ccdc;
  text-align: left;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2px;
`;

export const Button = styled.button`
  margin-left: 16px;
  width: 136px;
  height: 44px;
  border: none;
  border-radius: 16px;
  box-shadow: 1px 3px 7px rgba(170, 178, 197, 0.4);
  background-color: ${COLORS.backgroungColor};
  color: ${COLORS.textColor};
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 400ms ease-in-out, color 400ms ease-in-out,
    box-shadow 400ms ease-in-out;

  :hover,
  :focus {
    background-color: ${COLORS.activeColor};
    color: ${COLORS.whiteColor};
    box-shadow: 1px 3px 7px rgba(255, 119, 8, 0.4);
  }

  //   @media screen and (min-width: 768px) {
  //     width: 1098px;
  //   }
`;
