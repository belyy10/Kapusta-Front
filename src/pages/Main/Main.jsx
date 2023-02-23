import BackgroundLogInContainer from 'components/BackgroundLogInContainer/BackgroundLogInContainer';
import Container from 'components/Container';
import Table from 'components/Table';

export default function Main() {
  return (
    <BackgroundLogInContainer>
      <Container>
        <h1>MAIN PAGE</h1>
        <Table />
      </Container>
    </BackgroundLogInContainer>
  );
}
