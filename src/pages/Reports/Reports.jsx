// import { useState } from 'react';

import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import CategoryContainer from 'components/CategoryContainer';
import Container from 'components/Container';
import Graphic from 'components/Graphic';
import Swager from 'components/Swager';
import { IconLink, LinkToMain } from './Reports.styled';
import { useState } from 'react';
// import TypeSwitcher from 'components/TypeSwitcher';
import ReportInfo from 'components/ReportInfo';

export default function Reports() {
  const [category, setCategory] = useState('Products');
  const [transactions, setTransactions] = useState('Expenses');
  const [currentTime, setCurrentTime] = useState({
    month: 'September',
    year: 2022,
    mm: 9,
  });

  function changeTransaction() {
    if (transactions === 'Expenses') {
      setTransactions('Incomes');
      return;
    }
    setTransactions('Expenses');
  }

  return (
    <BackgroundPrivateContainer>
      <Container>
        <LinkToMain to="/main">
          <IconLink size={18} />
          Main Page
        </LinkToMain>

        <Balance />

        <Swager setCurrentTime={setCurrentTime} />

        {/* <TypeSwitcher /> */}
        <ReportInfo />
        <CategoryContainer
          setCategory={setCategory}
          category={category}
          transactions={transactions}
          changeTransaction={changeTransaction}
        />
        <Graphic
          category={category}
          transactions={transactions}
          currentTime={currentTime}
        />
      </Container>
    </BackgroundPrivateContainer>
  );
}
