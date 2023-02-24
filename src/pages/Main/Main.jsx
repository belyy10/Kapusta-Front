import BackgroundLogInContainer from 'components/BackgroundLogInContainer/BackgroundLogInContainer';
import Container from 'components/Container';
import Table from 'components/Table';
import { useMedia } from 'hooks/useMedia';

export default function Main() {
  const { isTabletAndDesktop } = useMedia();

  return (
    <BackgroundLogInContainer>
      <Container>
        <h1>MAIN PAGE</h1>
        {isTabletAndDesktop && <Table />}
      </Container>
    </BackgroundLogInContainer>
  );
}
