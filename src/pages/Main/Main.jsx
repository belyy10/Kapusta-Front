import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
// import Container from 'components/Container';
import { IconLink, LinkReport, LinkToMain, IconLinkMain, MainInfo } from './Main.styled';
import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';
import { useMedia } from 'hooks/useMedia';

export default function Main() {
  const { isMobile } = useMedia();

  return (
    <BackgroundPrivateContainer>
      {isMobile ? (
        <>
          <LinkToMain to="/main">
            <IconLinkMain size={18} />
          </LinkToMain>
        </>
      ) : null}

      {!isMobile && (
        <MainInfo >
          <Balance />
          <LinkReport to="/reports">
            Reports
            <IconLink size={14} />
          </LinkReport>
        </MainInfo>
      )}
      <TransactionsContainer />
    </BackgroundPrivateContainer>
  );
}
