import { Btn, BtnTitle } from './CategoryBtn.styled';
import IconMaker from 'components/IconMaker';
import { useSelector } from 'react-redux';
import {
  selectSummaryByCategory,
  selectReportsCategoryExpenses,
  selectReportsCategoryIncomes,
} from 'redux/transactions/transactionsSelectors';
import COLORS from 'variables/colors/colors';

export default function CategoryBtn({ element, handleSetCategory }) {
  const summary = useSelector(selectSummaryByCategory);
  const categoryExpenses = useSelector(selectReportsCategoryExpenses);
  const categoryIncomes = useSelector(selectReportsCategoryIncomes);

  function summaryCategory(name) {
    if (summary.length === 0) {
      return 0;
    }
    const index = summary.findIndex(
      el =>
        el.name.toLowerCase() === name.toLowerCase() ||
        name.toLowerCase().includes(el.name.toLowerCase())
    );
    if (index === -1) {
      return 0;
    }
    return summary[index].sum;
  }

  return (
    <>
      <BtnTitle
        style={{
          pointerEvents: summaryCategory(element.name) > 0 ? 'auto' : 'none',
          opacity: summaryCategory(element.name) > 0 ? 1 : 0.5,
        }}
      >
        {summaryCategory(element.name)}
      </BtnTitle>

      <Btn
        style={{
          width: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: summaryCategory(element.name) > 0 ? 'auto' : 'none',
          opacity: summaryCategory(element.name) > 0 ? 1 : 0.5,
        }}
        onClick={() => {
          handleSetCategory(element.name);
        }}
      >
        <IconMaker
          category={element.name}
          color={
            categoryExpenses === element.name ||
            categoryIncomes === element.name
              ? COLORS.activeColor
              : '#071F41'
          }
          bgColor={
            categoryExpenses === element.name ||
            categoryIncomes === element.name
              ? COLORS.reportsIconBg
              : '#F5F6FB'
          }
        />
        <BtnTitle>{element.name}</BtnTitle>
      </Btn>
    </>
  );
}
