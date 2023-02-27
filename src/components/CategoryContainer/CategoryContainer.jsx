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

export default function CategoryContainer({
  category,
  setCategory,
  transactions,
  changeTransaction,
}) {
  const fileredCategory = categoryList.filter(
    category => category.type === transactions
  );

  console.log(fileredCategory);

  return (
    <Container>
      <ChoseBox>
        <ChoseBtn onClick={changeTransaction}>
          <MdKeyboardArrowLeft size={20} color={COLORS.activeColor} />
        </ChoseBtn>
        <ChosenTitle>{transactions}</ChosenTitle>
        <ChoseBtn onClick={changeTransaction}>
          <MdKeyboardArrowRight size={20} color={COLORS.activeColor} />
        </ChoseBtn>
      </ChoseBox>

      <BtnList>
        {fileredCategory.map(element => {
          return (
            <li key={element.name}>
              <Btn onClick={() => setCategory(element.name)}>
                <IconMaker
                  category={element.name}
                  size={56}
                  color={
                    category === element.name ? COLORS.activeColor : '#071F41'
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
