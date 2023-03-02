import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px auto;
  // padding-top: 104px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    flex-direction: row;
    align-self: center;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 48px;
    padding-top: 40px;
  }
`;
export const Title = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  margin-right: 20px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin-right: 21px;
    margin-bottom: 0px;
  }
`;
export const Section = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  border: 2px solid #ffffff;
  border-radius: 16px;
  background-color: transparent;
  font: inherit;
  font-weight: 700;
  text-align: center;
  color: black;
  width: 140px;
  height: 44px;
  border-radius: 22px 0px 0px 22px;

  @media screen and (min-width: 768px) {
    margin-right: 15px;
    border-radius: 16px;
  }
  @media (min-width: 1200px) {
    margin-right: 0;
    border-radius: 16px;
    margin-right: 15px;
    border-right: 1px solid #ffffff;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 21px;
  right: 5px;
  font-weight: 700;
  color: black;
  font: inherit;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    top: 19px;
    right: 22px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  color: rgba(82, 85, 95, 0.7);
  font-weight: 400;
  border-radius: 0px 22px 22px 0px;
  display: inline-block;
  height: 50px;
  width: 156px;

  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;

  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    border-radius: 16px;
  }

  :hover:enabled {
    background-color: #ff751d;
  }

  ::placeholder {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
  }
`;
export const Wrapper2 = styled.div`
  position: absolute;
  bottom: 42px;
  transform: translateY(calc(100% + 18px)) translateX(16%);
  width: 200px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  padding: 30px;
  border-radius: 30px;
  z-index: 10;

  ::before {
    content: '';
    position: absolute;
    left: 16%;
    top: -11px;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid #172d5d;
  }

  @media screen and (min-width: 768px) {
    width: 292px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 0px 0px 20px 0px;
`;
export const Styled = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  margin: 0;
`;

export const LinkReport = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  font-family: 'Roboto';

  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);

  letter-spacing: 0.04;

  color: rgba(82, 85, 95, 0.7);

  @media screen and (min-width: 678px) {
    position: absolute;
    top: 57px;
    right: 0;
    z-index: 20;
  }
`;
