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
import { categoryList } from 'variables/category/category';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCategoryExpenses,
  changeCategoryIncomes,
  toggleReportType,
} from 'redux/transactions/transactionsSlice';
import { selectTypeTransactionReports } from 'redux/transactions/transactionsSelectors';
import CategoryBtn from 'components/CategoryBtn';

export default function CategoryContainer() {
  const dispatch = useDispatch();
  const type = useSelector(selectTypeTransactionReports);
  const fileredCategory = categoryList.filter(
    category => category.type === type
  );

  function handleSetCategory(name) {
    if (type === 'Expenses') {
      dispatch(changeCategoryExpenses(name));
      return;
    }
    dispatch(changeCategoryIncomes(name));
  }

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
      <BtnList>
        {fileredCategory.map(element => {
          return (
            <BtnListItem key={element.name}>
              <CategoryBtn
                element={element}
                handleSetCategory={handleSetCategory}
              />
            </BtnListItem>
          );
        })}
      </BtnList>
    </Container>
  );
}
