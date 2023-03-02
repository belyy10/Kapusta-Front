import styled from 'styled-components';
import COLORS from 'variables/colors/colors';

export const SummaryBox = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 230px;
    height: 280px;
    margin-top: 40px;

    display: inline-flex;
    flex-direction: column;
    text-align: center;

    border-top-left-radius: 16px;
    border-top-right-radius: 16px; 
    border-bottom-right-radius: 16px;

    background-color: ${COLORS.bgTableTitle};

    text-transform: uppercase;
  }

  @media screen and (min-width: 1200px) {
    width: 213px;
  }
`;

// export const SummayrTitleRow = styled.tr`
//   width: 100%;
//   height: 38px;
  


//   border: 4px solid ${COLORS.whiteColor};
//     /* width: 100%;
//   height: 38px; */

//   /* box-sizing: 4px; */
//   align-content: center;
//   text-align: center;

//   column-span: 2;

 

//    /* border-bottom: 4px solid ${COLORS.whiteColor}; */
//   `;

export const SummaryTitle = styled.h4`
  /* width: 100%;*/
  display: flex;
    justify-content: center;
    align-items: center;
  height: 38px;

  box-sizing: 4px;
  align-content: center;
  text-align: center;
  list-style:none;

   font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;

   border-bottom: 4px solid ${COLORS.whiteColor};
`;

export const SummaryBody = styled.ul`
  list-style: none;

`;

export const SummaryList = styled.li`
  height: 38px;
  /* width: 100%; */
  border-bottom: 2px solid ${COLORS.whiteColor};

  padding-left: 22px;
  padding-right: 20px;
`;

export const SummaryItem = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  height: 38px;
  /* text-align: ; */

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.167;
  letter-spacing: 0.04em;

  /* border-bottom: 2px solid ${COLORS.whiteColor}; */
  color: ${COLORS.textColor};
`;

export const SummaryItemSpan = styled.p`
`;
