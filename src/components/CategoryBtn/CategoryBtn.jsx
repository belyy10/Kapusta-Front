import { Btn, BtnTitle } from './CategoryBtn.styled';
import IconMaker from 'components/IconMaker';
import { useState } from 'react';
import COLORS from 'variables/colors/colors';

export default function CategoryBtn({ element }) {
  const [changeCategory, setChangeCategory] = useState("");

  function handleClick(e) {
  setChangeCategory(e.currentTarget.innerText.toLowerCase());
  }

  return (
    <>
      <BtnTitle>
        {element.sum}
      </BtnTitle>

      <Btn
        style={{
          width: 90,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        name={element.name}
        onFocus={
          handleClick
        }
        onBlur={() => {
          setChangeCategory("");
        }}
      >
        <IconMaker
          category={element.name.toLowerCase()}
          focused={element.name === changeCategory}

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
