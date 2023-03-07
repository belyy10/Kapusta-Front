import { useEffect, useState } from 'react';

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
  InputDate,
} from './Mobile.styled.jsx';
import { changeType } from 'redux/transactions/transactionsOperations.js';
import { useDispatch } from 'react-redux';

export default function Mobile() {
  const [trForm, openTrForm] = useState(false);
  const currentDate = new Date().toISOString().slice(0, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeType('all'));
  });

  return (
    <>
      <MobileContainer>
        <MobileInfo>
          <LinkToTransaction to="/transaction">
            <IconLink size={18} />
            TO TRANSACTION
          </LinkToTransaction>
          <LinkToReport to="/reports">
            Reports
            <IconLinkReport size={14} color=" #52555F" />
          </LinkToReport>
          <Balance />
          <InputDate
            name="date"
            type="date"
            min="1920-01-01"
            max={currentDate}
            // onChange={event =>
            //   setFieldValue(
            //     'date',
            //     moment(event.target.value).format('YYYY-MM-DD')
            //   )
            // }
          />
          {trForm ? <TransactionListMobile openTrForm={openTrForm} /> : null}
        </MobileInfo>
      </MobileContainer>
      <MobileTypeBtn openTrForm={openTrForm} />
    </>
  );
}
