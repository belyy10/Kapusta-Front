
// import { useState } from 'react';

import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import Container from 'components/Container';
import Graphic from 'components/Graphic';
import Swager from 'components/Swager';
import { IconLink, LinkToMain } from './Reports.styled';
// import ReportList from 'components/ReportList';
import TypeSwitcher from 'components/TypeSwitcher';
import ReportInfo from 'components/ReportInfo';


export default function Reports() {
  // const [category, setCategory] = useState('all');

  return (

    <BackgroundPrivateContainer>
      <Container>
        <LinkToMain to="/main">
          <IconLink size={18} />
          Main Page
        </LinkToMain>
      <ReportInfo />
      {/* <TypeSwitcher setCategory={setCategory} /> */}
      <TypeSwitcher />
      {/* <ReportList /> */}
        <Balance />

        <Swager />

        <Graphic />
      </Container>
    </BackgroundPrivateContainer>
  );
}
