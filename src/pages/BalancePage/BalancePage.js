import Container from 'components/Container';
import  Balance  from '../../components/Balance/Balance';
import { Box } from './BalancePage.styled';

export default function BalancePage() {
  return (
    <Container>
      <Box>
        <Balance />
      </Box>
    </Container>
  );
}
