import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  padding: 36px 0;
  width: 100%;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  background-color: ${COLORS.whiteColor};
`;

export const ChoseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const ChosenTitle = styled.p`
  padding: 0 16px;

  font-weight: 700;
  font-size: 14px;
  line-height: calc(16 / 14);

  letter-spacing: 0.02;
  text-transform: uppercase;

  color: ${COLORS.blackColor};
`;

export const ChoseBtn = styled.button`
  border: none;
  background-color: transparent;
`;

export const BtnList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  @media screen and (min-width: 768px) {
    padding: 0;
    gap: 25px;
  }

  @media screen and (min-width: 1200px) {
    padding: 20px 170px;
    gap: 52px;
  }
`;

export const BtnListItem = styled.li`
  padding-right: 5px;
  padding-left: 5px;
  border-bottom: 2px solid rgb(224, 229, 235);
  padding-bottom: 20px;
  padding-top: 21px;

  @media screen and (min-width: 768px) {
    border: none;
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

export const Btn = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
`;

export const BtnTitle = styled.span`
  display: block;
  text-align: center;
  margin: 5px 0px 5px 0px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #52555f;
`;

export const IconBox = styled.div`
  border-radius: 24px;
`;
