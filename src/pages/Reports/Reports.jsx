import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import Container from 'components/Container';
import Graphic from 'components/Graphic';
import { IconLink, LinkToMain } from './Reports.styled';

export default function Reports() {
  return (
    <BackgroundPrivateContainer>
      <Container>
        {/* <h2>REPORTS</h2> */}

        <LinkToMain to="/main">
          <IconLink size={18} />
          Main Page
        </LinkToMain>

        <Balance />
        <Graphic />
      </Container>
    </BackgroundPrivateContainer>
  );
}
