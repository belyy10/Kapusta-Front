import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';

import Balance from 'components/Balance';
import Container from 'components/Container';

import TransactionsContainer from 'components/TransactionsContainer/TransactionsContainer';

export default function Main() {
  return (
    <BackgroundPrivateContainer>
      <Container>
        <h1>MAIN PAGE</h1>

        <Balance />
        <TransactionsContainer />
      </Container>
    </BackgroundPrivateContainer>
  );
}
