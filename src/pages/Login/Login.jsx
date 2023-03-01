// import { useState } from 'react';
// import Container from 'components/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from './Login.styled';
import BackgroundLogInContainer from 'components/BackgroundLogInContainer/BackgroundLogInContainer';
import LoginTitle from 'components/LoginTitle';

export default function Login() {
  // const [loginFormNeeded, setLoginFormNeeded] = useState(true);
  // const onRegistrationClick = () => {
  //   setLoginFormNeeded(false);
  // };

  // const onBackToLogin = () => {
  //   setLoginFormNeeded(true);
  // };
  return (
    <BackgroundLogInContainer>
      {/* <Container> */}
      <LoginTitle />
      <Box>
        <LoginForm />
        {/* {loginFormNeeded ? (
          <LoginForm onRegistrationClick={onRegistrationClick} />
        ) : (
          <RegisterForm onBackToLogin={onBackToLogin} />
        )} */}
      </Box>
      {/* </Container> */}
    </BackgroundLogInContainer>
  );
}
