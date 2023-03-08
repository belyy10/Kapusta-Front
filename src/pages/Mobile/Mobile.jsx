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
  const [trForm, openTrForm] = useState();
  // const [openTrForm] = useState(false);
  const currentDate = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();
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
          <InputDate
            name="date"
            type="date"
            min="1920-01-01"
            max={currentDate}
            value={currentDate}
            // onChange={event =>
            //   setFieldValue(
            //     'date',
            //     moment(event.target.value).format('YYYY-MM-DD')
            //   )
            // }
          />
          {trForm ? <TransactionListMobile openTrForm={openTrForm} /> : <TransactionListMobile openTrForm={openTrForm} />}
          <SelectDate value={date} handleDateChange={handleDateChange} />
          <TransactionListMobile />
        </MobileInfo>
      </MobileContainer>
      <MobileTypeBtn />
    </>
  );
}
