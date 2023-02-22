import Container from 'components/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from './Registration.styled';

export default function Registration() {
  return (
    <Container>
      <Box>
        <RegisterForm />
      </Box>
    </Container>
  );
}
