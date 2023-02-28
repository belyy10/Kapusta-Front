import {
  BtnList,
  Container,
  Btn,
  BtnTitle,
  ChoseBox,
  ChosenTitle,
  ChoseBtn,
} from './CategoryContainer.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import COLORS from 'variables/colors/colors';
import { categoryList } from 'variables/category/category';
import IconMaker from 'components/IconMaker';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCategoryExpenses,
  changeCategoryIncomes,
  toggleReportType,
} from 'redux/transactions/transactionsSlice';
import {
  selectReportsCategoryExpenses,
  selectReportsCategoryIncomes,
  selectTypeTransactionReports,
} from 'redux/transactions/transactionsSelectors';

export default function CategoryContainer({ setCategory }) {
  const dispatch = useDispatch();
  const type = useSelector(selectTypeTransactionReports);
  const categoryExpenses = useSelector(selectReportsCategoryExpenses);
  const categoryIncomes = useSelector(selectReportsCategoryIncomes);
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
            <li key={element.name}>
              <Btn onClick={() => handleSetCategory(element.name)}>
                <IconMaker
                  category={element.name}
                  size={56}
                  color={
                    categoryExpenses === element.name ||
                    categoryIncomes === element.name
                      ? COLORS.activeColor
                      : '#071F41'
                  }
                />
                <BtnTitle>{element.name}</BtnTitle>
              </Btn>
            </li>
          );
        })}
      </BtnList>
    </Container>
  );
}
