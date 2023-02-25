import BackgroundLogInContainer from 'components/BackgroundLogInContainer/BackgroundLogInContainer';
import Container from 'components/Container';
import Summary from 'components/Summary';
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useMedia } from 'hooks/useMedia';

export default function Main() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  return (

    <BackgroundLogInContainer>
      <Container>
        <h1>MAIN PAGE</h1>
        {isTabletAndDesktop && <Table />}
        {isMobile && <TransactionListMobile />}
      </Container>
    </BackgroundLogInContainer>
  );
}
