import styled from 'styled-components';
// import Balance from 'components/Balance/Balance';
import SliderBox from 'components/SliderBox/SliderBox';
import { useMedia } from 'hooks/useMedia';

const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  justify-content: center;

  height: 24px;
`
const ArrowText = styled.p`
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

const TopBox = styled.div`  
  display:flex;
  flex-direction: column;
  align-items: center;

  padding-top:22px;

  @media (min-width: 768px) {
    margin-right:40px;
    flex-direction: row;
  }

`

const DataSliderBox = styled.div`
  padding-top:22px;
`
const DataSliderTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;

  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);

`

const DataSlider  = styled.div`
`

const BalanceBox = styled.div`
  margin-top:21px;
`

const BalanceBoxTitle = styled.p`
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
const BackToMainBtn = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
`

const Balance = styled.div`

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

export default function BackArrow() {
  return (

    
    <TopBox>

      <ArrowBox>
        <BackToMainBtn>
          <svg 
            width="18" 
            height="12" 
            fill="none" 
          >
            <path d="M18 5H3.83l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H18V5z" 
              fill="#FF751D"/
            >
          </svg>
        </BackToMainBtn>

        <ArrowText>
          Main page
        </ArrowText>
      </ArrowBox>

      
      <SliderBox>
      </SliderBox>
      
      <BalanceBox>
        <BalanceBoxTitle>
          Balance: 
        </BalanceBoxTitle>

        <Balance>
          <BalanceValue>
            55 000.00 UAH
          </BalanceValue>
        </Balance>
      </BalanceBox>
    </TopBox>
    
  );
}