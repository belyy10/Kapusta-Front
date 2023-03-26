import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BtnList,
  Container,
  ChoseBox,
  ChosenTitle,
  ChoseBtn,
  BtnListItem,
  TextInfo,
} from './CategoryContainer.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import COLORS from 'variables/colors/colors';
// import { categoryList } from 'variables/category/category';

import { toggleReportType } from 'redux/transactions/transactionsSlice';
import {
  selectTypeTransactionReports,
  getReportsData,
  selectPeriod,
} from 'redux/transactions/transactionsSelectors';
import { fetchReportExpenses } from '../../redux/transactions/transactionsOperations';
import CategoryBtn from 'components/CategoryBtn';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const type = useSelector(selectTypeTransactionReports).toLowerCase();
  console.log('type', type);
  const date = useSelector(selectPeriod);
  console.log('date', date);

  // const handleToggleReportType=() => {
  //   dispatch(toggleReportType());
  // }

  useEffect(() => {
    const сontroller = new AbortController();

    dispatch(fetchReportExpenses({ type, date, сontroller }));

    return () => сontroller.abort();
  }, [type, dispatch, date]);

  const reportsData = useSelector(getReportsData);
  console.log("reportsData", reportsData)

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
                />
              </BtnListItem>
            );
          })}
        </BtnList>
      ) : (
        <TextInfo>There are no {type} for the current period :-)</TextInfo>
      )}

    </Container>
  );
}
