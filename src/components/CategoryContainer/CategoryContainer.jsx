import {
  BtnList,
  Container,
  Btn,
  BtnTitle,
  ChoseBox,
} from './CategoryContainer.styled';
import { GiFamilyHouse } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { MdSportsHandball } from 'react-icons/md';
import { BsBookHalf } from 'react-icons/bs';
import { MdDevicesOther } from 'react-icons/md';
import { FiMeh } from 'react-icons/fi';
import { SiJusteat } from 'react-icons/si';
import { BiDrink } from 'react-icons/bi';
import { BiJoystick } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { MdEmojiTransportation } from 'react-icons/md';
import COLORS from 'variables/colors/colors';

export default function CategoryContainer({
  category,
  setCategory,
  transactions,
  changeTransaction,
}) {
  return (
    <Container>
      <ChoseBox>
        <button onClick={changeTransaction}>left</button>
        <p>{transactions}</p>
        <button onClick={changeTransaction}>right</button>
      </ChoseBox>

      <BtnList>
        <li>
          <Btn onClick={() => setCategory('Products')}>
            <SiJusteat
              size={56}
              color={category === 'Products' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Products</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Alcohol')}>
            <BiDrink
              size={56}
              color={category === 'Alcohol' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Alcohol</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Entertainment')}>
            <BiJoystick
              size={56}
              color={
                category === 'Entertainment' ? COLORS.activeColor : '#071F41'
              }
            />
            <BtnTitle>Entertainment</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Health')}>
            <GiHealing
              size={56}
              color={category === 'Health' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Health</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Transport')}>
            <MdEmojiTransportation
              size={56}
              color={category === 'Transport' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Transport</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Housing')}>
            <GiFamilyHouse
              size={56}
              color={category === 'Housing' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Housing</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Technique')}>
            <BsTools
              size={56}
              color={category === 'Technique' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Technique</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Communal, communication')}>
            <MdDevicesOther
              size={56}
              color={
                category === 'Communal, communication'
                  ? COLORS.activeColor
                  : '#071F41'
              }
            />
            <BtnTitle>Communal, communication</BtnTitle>
          </Btn>
        </li>

        <li>
          <Btn onClick={() => setCategory('Sports, hobbies')}>
            <MdSportsHandball
              size={56}
              color={
                category === 'Sports, hobbies' ? COLORS.activeColor : '#071F41'
              }
            />
            <BtnTitle>Sports, hobbies</BtnTitle>
          </Btn>
        </li>
        <li>
          <Btn onClick={() => setCategory('Education')}>
            <BsBookHalf
              size={56}
              color={category === 'Education' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Education</BtnTitle>
          </Btn>
        </li>

        <li>
          <Btn onClick={() => setCategory('Other')}>
            <FiMeh
              size={56}
              color={category === 'Other' ? COLORS.activeColor : '#071F41'}
            />
            <BtnTitle>Other</BtnTitle>
          </Btn>
        </li>
      </BtnList>
    </Container>
  );
}
