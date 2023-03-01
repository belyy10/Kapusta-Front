import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import Container from 'components/Container';
import { IconLink, LinkReport } from './Main.styled';
import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';

export default function Main() {
  return (
    <BackgroundPrivateContainer>
      <Container>
        <LinkReport to="/reports">
          reports
          <IconLink size={14} color=" #52555F" />
        </LinkReport>
        <Balance />
        <TransactionsContainer />
        
      </Container>
    </BackgroundPrivateContainer>
  );
}
