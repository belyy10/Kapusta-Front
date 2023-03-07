import { useState } from 'react';
import Balance from 'components/Balance';
import TransactionListMobile from 'components/TransactionListMobile';
import MobileTypeBtn from 'components/MobileTypeBtn';

import {
  MobileContainer,
  MobileInfo,
  LinkToTransaction,
  IconLink,
  IconLinkReport,
  LinkToReport,
} from './Mobile.styled.jsx';
import SelectDate from 'components/SelectDate/SelectDate.jsx';

export default function Mobile() {
  const [date, setDate] = useState('');

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  return (
    <>
      <MobileContainer>
        <MobileInfo>
          <LinkToTransaction to="/transaction" state={{ date: date }}>
            <IconLink size={18} />
            TO TRANSACTION
          </LinkToTransaction>
          <LinkToReport to="/reports">
            Reports
            <IconLinkReport size={14} color=" #52555F" />
          </LinkToReport>
          <Balance />
          <SelectDate value={date} handleDateChange={handleDateChange} />
          <TransactionListMobile />
        </MobileInfo>
      </MobileContainer>
      <MobileTypeBtn />
    </>
  );
}
