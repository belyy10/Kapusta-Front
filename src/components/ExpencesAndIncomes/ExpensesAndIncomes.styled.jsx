import styled from 'styled-components';


export const Block = styled.div`
  padding: 20px 0px 25px;
  margin-top:32px;

  display:flex;
  align-items: center;
  justify-content: space-around;

  "background-color": #ffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;

  &::after {
    content: "";
      display: block;
      height: 70px;
      width: 2px;
      background-color: #E0E5EB;
      position: absolute;
      // top: 229px;

      @media (min-width: 768px) {
        height: 36px;
        // top: 228px;

    
      }
  }

  @media (min-width: 768px) {
    padding: 15px 0px 15px;
    flex-direction: row;


  }


`

export const ExpensesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  


  @media (min-width: 768px) {
    margin-right:40px;
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
  }


`

export const IncomesBlock = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;

  @media (min-width: 768px) {

    flex-direction: row;
  }
`

export const BlockTitle = styled.h2`
  margin-bottom:5px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #52555F;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 15px;
  }
`

export const ExpensesValue = styled.p`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

letter-spacing: 0.04em;

color: #E53935;
`

export const IncomeValue = styled.p`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.04em;

color: #407946;
`