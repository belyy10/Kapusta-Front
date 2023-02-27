import { SiJusteat } from 'react-icons/si';
import { BiDrink } from 'react-icons/bi';
import { BiJoystick } from 'react-icons/bi';
import { GiHealing } from 'react-icons/gi';
import { MdEmojiTransportation } from 'react-icons/md';
import { GiFamilyHouse } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { BsClipboardCheck } from 'react-icons/bs';
import { MdSportsHandball } from 'react-icons/md';
import { BsBookHalf } from 'react-icons/bs';
import { MdDevicesOther } from 'react-icons/md';
import { FiMeh } from 'react-icons/fi';

export function getCategoryIcon(category) {
  switch (category) {
    case 'protucts':
      <SiJusteat size={56} />;
      break;
    case 'alcohol':
      <BiDrink size={56} />;
      break;
    case 'entertainment':
      <BiJoystick size={56} />;
      break;
    case 'health':
      <GiHealing size={56} />;
      break;
    case 'transport':
      <MdEmojiTransportation size={56} />;
      break;
    case 'housing':
      <GiFamilyHouse size={56} />;
      break;
    case 'technique':
      <BsTools size={56} />;
      break;
    case 'communal, communication':
      <BsClipboardCheck size={56} />;
      break;
    case 'sports, hobbies':
      <MdSportsHandball size={56} />;
      break;
    case 'education':
      <BsBookHalf size={56} />;
      break;
    case 'other':
      <MdDevicesOther size={56} />;
      break;
    default:
      <FiMeh size={56} />;
  }
}
