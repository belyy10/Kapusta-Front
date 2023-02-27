import styled from 'styled-components';


export const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  justify-content: center;

  height: 24px;
`
export const ArrowText = styled.p`
  display:none;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);

  @media (min-width: 768px) {
    display: block;
    margin-left: 19px;
    margin-right: 0 auto;
  }
`

export const TopBox = styled.div`  
  display:flex;
  flex-direction: column;
  align-items: center;

  padding-top:22px;

  @media (min-width: 768px) {
    margin-right:40px;
    flex-direction: row;
  }

`

export const BalanceBox = styled.div`
  margin-top:21px;
`

export const BalanceBoxTitle = styled.p`
  margin:0px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;

  color: rgba(82, 85, 95, 0.7);
`
export const BackToMainBtn = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
`

export const Balance = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  width: 183px;
  height: 44px;
  margin-top:8px;

  border: 2px solid #aaaa;
  border-radius: 22px;
`

const BalanceValue = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`