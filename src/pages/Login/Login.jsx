import Container from 'components/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from './Login.styled';

export default function Login() {
  return (
    <Container>
      <Box>
        <LoginForm />
      </Box>
    </Container>
  );
}
