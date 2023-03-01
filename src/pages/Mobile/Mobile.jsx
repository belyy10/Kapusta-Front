import { useEffect, useState } from 'react';

import {
  Balance,
  TransactionsContainer,
  MobileTypeBtn,
  TransactionListMobile,
} from 'components';

import {
  MobileContainer,
  MobileInfo,
  LinkToTransaction,
  IconLink,
} from './Mobile.styled.jsx';
// import { changeType } from 'redux/transactions';
// import { useDispatch } from 'react-redux';

export default function Mobile() {
  const [trForm, openTrForm] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changeType('all'));
  // }, []);

  return (
    <>
      <MobileContainer>
        {trForm ? (
          <TransactionListMobile openTrForm={openTrForm} />
        ) : (
          <MobileInfo>
            <LinkToTransaction to="/transaction">
              <IconLink size={18} />
              TO TRANSACTION
            </LinkToTransaction>

            <Balance />
            {/* календарь */}
          </MobileInfo>
        )}
        <TransactionsContainer />
      </MobileContainer>
      <MobileTypeBtn openTrForm={openTrForm} />
    </>
  );
}
