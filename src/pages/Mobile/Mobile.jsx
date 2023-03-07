import { useEffect, useState } from 'react';
import moment from 'moment';
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
import { changeType } from 'redux/transactions/transactionsOperations.js';
import { useDispatch } from 'react-redux';
import SelectDate from 'components/SelectDate/SelectDate.jsx';

export default function Mobile() {
  const [trForm, openTrForm] = useState(false);

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  const handleDateChange = e => {
    setDate(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeType('all'));
  });

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
          {trForm ? <TransactionListMobile openTrForm={openTrForm} /> : null}
        </MobileInfo>
      </MobileContainer>
      <MobileTypeBtn openTrForm={openTrForm} />
    </>
  );
}
