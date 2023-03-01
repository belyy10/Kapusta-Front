import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import CategoryContainer from 'components/CategoryContainer';
// import Container from 'components/Container';
import Graphic from 'components/Graphic';
import Swager from 'components/Swager';
import { IconLink, LinkToMain } from './Reports.styled';
import ReportInfo from 'components/ReportInfo';

export default function Reports() {
  return (
    <BackgroundPrivateContainer>
      {/* <Container> */}
      <LinkToMain to="/main">
        <IconLink size={18} />
        Main Page
      </LinkToMain>

      <Balance />
      <Swager />

      <ReportInfo />
      <CategoryContainer />
      <Graphic />
      {/* </Container> */}
    </BackgroundPrivateContainer>
  );
}
