import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { Wraper, Btn, Text } from './Switcher.styled.jsx';

export default function Switcher({ onLeftClick, onRightClick, text }) {
  return (
    <Wraper>
      <Btn onClick={onLeftClick} name="leftButton">
        <AiOutlineLeft height={8} width={8} />
      </Btn>
      <Text>{text}</Text>
      <Btn onClick={onRightClick} name="rightButton">
        <AiOutlineRight height={8} width={8} />
      </Btn>
    </Wraper>
  );
}
