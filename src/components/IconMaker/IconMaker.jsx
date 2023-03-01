import { GiFamilyHouse } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { MdSportsHandball } from 'react-icons/md';
import { BsBookHalf } from 'react-icons/bs';
import { MdDevicesOther } from 'react-icons/md';
import { FiMeh } from 'react-icons/fi';
import { SiJusteat } from 'react-icons/si';
import { BiDrink, BiJoystick } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { MdEmojiTransportation } from 'react-icons/md';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GrMoney } from 'react-icons/gr';

export default function IconMaker({ category, size, color }) {
  if (category === 'Products') {
    return <SiJusteat size={size} color={color} />;
  }
  if (category === 'Alcohol') {
    return <BiDrink size={size} color={color} />;
  }
  if (category === 'Entertainment') {
    return <BiJoystick size={size} color={color} />;
  }
  if (category === 'Health') {
    return <GiHealing size={size} color={color} />;
  }
  if (category === 'Transport') {
    return <MdEmojiTransportation size={size} color={color} />;
  }
  if (category === 'Housing') {
    return <GiFamilyHouse size={size} color={color} />;
  }
  if (category === 'Technique') {
    return <BsTools size={size} color={color} />;
  }
  if (category === 'Communal, communication') {
    return <MdDevicesOther size={size} color={color} />;
  }
  if (category === 'Sports, hobbies') {
    return <MdSportsHandball size={size} color={color} />;
  }
  if (category === 'Education') {
    return <BsBookHalf size={size} color={color} />;
  }
  if (category === 'Other') {
    return <FiMeh size={size} color={color} />;
  }
  if (category === 'Salary') {
    return <GrMoney size={size} color={color} />;
  }
  if (category === 'Add.income') {
    return <FcMoneyTransfer size={size} color={color} />;
  }
}
