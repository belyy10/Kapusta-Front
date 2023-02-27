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

        <Swager />

        {/* <TypeSwitcher /> */}
        <ReportInfo />
        <CategoryContainer
          setCategory={setCategory}
          category={category}
          transactions={transactions}
          changeTransaction={changeTransaction}
        />
        <Graphic />
      </Container>
    </BackgroundPrivateContainer>
  );
}
