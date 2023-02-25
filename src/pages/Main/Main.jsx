import BackgroundLogInContainer from 'components/BackgroundLogInContainer/BackgroundLogInContainer';
import Balance from 'components/Balance';
import Container from 'components/Container';
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useMedia } from 'hooks/useMedia';

export default function Main() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  return (
    <BackgroundLogInContainer>
      <Container>
        <h1>MAIN PAGE</h1>
        <Balance />
        {isTabletAndDesktop && <Table />}
        {isMobile && <TransactionListMobile />}
      </Container>
    </BackgroundLogInContainer>
  );
}
