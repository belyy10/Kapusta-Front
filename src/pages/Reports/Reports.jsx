// import { useState } from 'react';
import Container from 'components/Container';
import Graphic from 'components/Graphic';
// import ReportList from 'components/ReportList';
import TypeSwitcher from 'components/TypeSwitcher';
import ReportInfo from 'components/ReportInfo';

export default function Reports() {
  // const [category, setCategory] = useState('all');

  return (
    <Container>
      <h2>REPORTS</h2>
      <ReportInfo />
      {/* <TypeSwitcher setCategory={setCategory} /> */}
      <TypeSwitcher />
      {/* <ReportList /> */}
      <Graphic />
    </Container>
  );
}
