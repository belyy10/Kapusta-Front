import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BtnList,
  Container,
  ChoseBox,
  ChosenTitle,
  ChoseBtn,
  BtnListItem,
} from './CategoryContainer.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import COLORS from 'variables/colors/colors';
// import { categoryList } from 'variables/category/category';

import {
  // changeCategoryExpenses,
  // changeCategoryIncomes,
  toggleReportType,
} from 'redux/transactions/transactionsSlice';
import { selectTypeTransactionReports,  getReportsData,
  selectCurrentPeriod,   
} from 'redux/transactions/transactionsSelectors';
  import { fetchReportExpenses } from '../../redux/transactions/transactionsOperations';
import CategoryBtn from 'components/CategoryBtn';

export default function CategoryContainer() {

  const dispatch = useDispatch();

  const type = useSelector(selectTypeTransactionReports).toLowerCase();
  // const type=typeEl.toLowerCase();
  console.log('type', type);
  const date = useSelector(selectCurrentPeriod);
  console.log('date', date);

  // const handleToggleReportType=() => {
  //   dispatch(toggleReportType()); 
  // }

useEffect(() => {
  const сontroller = new AbortController();

  dispatch(fetchReportExpenses({type, date: {mm: 3, year: 2023 }, сontroller}));
 
   return () =>  сontroller.abort();

},[type, dispatch]);


const reportsData = useSelector(getReportsData);
console.log('reporstData', reportsData); 

// if(type === "expenses"){
//   const reportsArr = reportsData.reverse();
//   console.log("reportsArr", reportsArr)
//   return reportsArr;
// }else if (type === "incomes") {
// return reportsData;
// };
  

  // const dispatch = useDispatch();
  // const type = useSelector(selectTypeTransactionReports);
  // const fileredCategory = categoryList.filter(
  //   category => category.type === type
  // );

  // function handleSetCategory(name) {
  //   if (type === 'Expenses') {
  //     dispatch(changeCategoryExpenses(name));
  //     return;
  //   }
  //   dispatch(changeCategoryIncomes(name));
  // }

  return (
    <Container>
      <ChoseBox>
        <ChoseBtn onClick={() => dispatch(toggleReportType())}>
          <MdKeyboardArrowLeft size={20} color={COLORS.activeColor} />
        </ChoseBtn>
        <ChosenTitle>{type}</ChosenTitle>
        <ChoseBtn onClick={() => dispatch(toggleReportType())}>
          <MdKeyboardArrowRight size={20} color={COLORS.activeColor} />
        </ChoseBtn>
      </ChoseBox>

      {reportsData?.length > 0 ? (

      <BtnList>
        {reportsData.map(element => {
          return (
            <BtnListItem key={element.id}>
              <CategoryBtn
                element={element}
                // handleSetCategory={handleSetCategory}
              />
            </BtnListItem>
          );
        })}
      </BtnList>

) : (
  <p>There are no {type} for the current period :-)</p>
)}
    </Container>
  );
}