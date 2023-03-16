import { Btn, BtnTitle } from './CategoryBtn.styled';
import IconMaker from 'components/IconMaker';
// import { useSelector } from 'react-redux';
// import {
//   selectSummaryByCategory,
//   selectReportsCategoryExpenses,
//   selectReportsCategoryIncomes,
// } from 'redux/transactions/transactionsSelectors';
import COLORS from 'variables/colors/colors';

export default function CategoryBtn({ element }) {
  // const summary = useSelector(selectSummaryByCategory);
  // const categoryExpenses = useSelector(selectReportsCategoryExpenses);
  // const categoryIncomes = useSelector(selectReportsCategoryIncomes);
  // console.log("categoryExpenses",categoryExpenses);
  // console.log("categoryIncomes",categoryIncomes)

  // function summaryCategory(name) {
  //   if (summary.length === 0) {
  //     return 0;
  //   }

  //   const index = summary.findIndex(
  //     el =>
  //       el.name.toLowerCase() === name.toLowerCase() ||
  //       name.toLowerCase().includes(el.name.toLowerCase())
  //   );
  //   if (index === -1) {
  //     return 0;
  //   }

  //   return summary[index].sum;
  // }

  const changeCategory = '';

  function handleClick(e) {
    const changeCategory = e.currentTarget.innerText.toLowerCase();
    console.log(changeCategory);
    return changeCategory;
  }

  return (
    <>
      <BtnTitle
        style={{
          pointerEvents: element.sum > 0 ? 'auto' : 'none',
          opacity: element.sum > 0 ? 1 : 0.5,
        }}
      >
        {element.sum}
      </BtnTitle>

      <Btn
        style={{
          width: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: element.sum > 0 ? 'auto' : 'none',
          opacity: element.sum > 0 ? 1 : 0.5,
        }}
        name={element.name}
        onClick={
          // () => {
          // handleSetCategory(element.name);
          handleClick
        }
      >
        <IconMaker
          category={element.name.toLowerCase()}
          color={
            element.name === changeCategory ? COLORS.activeColor : '#071F41'
          }
          bgColor={
            element.name === changeCategory ? COLORS.reportsIconBg : '#F5F6FB'
          }
        />
        <BtnTitle>{element.name}</BtnTitle>
      </Btn>
    </>
  );
}
