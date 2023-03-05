import { Formik, ErrorMessage, Form } from 'formik';
import { useDispatch } from 'react-redux';
import {
  ButtonGoogle,
  ButtonGroup,
  Button,
  FormBox,
  Google,
  Input,
  Label,
  LabelText,
  TextGoogle,
  Title,
  TitleGoogle,
  Error,
} from './LoginForm.styled';
import { FcGoogle } from 'react-icons/fc';
import { logIn, register } from 'redux/auth/authOperations';
import schemaRegister from 'schema/shemaRegister';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { googleUser } from 'redux/auth/authOperations';

export const LoginForm = ({ onRegistrationClick }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };
  const [button, setButton] = useState(null);

  useEffect(() => {
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    const balance = searchParams.get('balance');

    if (email && token && balance) {
      dispatch(googleUser({ email, token, balance }));
      setSearchParams('', { replace: true });
    }
  }, [searchParams, dispatch, setSearchParams]);
  const handleClick = e => {
    switch (e.target.name) {
      case 'login':
        return setButton(true);
      case 'register':
        return setButton(false);
      default:
        return;
    }
  };

  const handleSubmit = (initialValues, { resetForm }) => {
    if (!button) {
      dispatch(register(initialValues));
      return;
    }
    dispatch(logIn(initialValues));
    resetForm();
  };

  return (
    <>
      <FormBox>
        <Google>
          <TitleGoogle>You can log in with your Google Account:</TitleGoogle>
          <ButtonGoogle href="https://kapusta-deployment.onrender.com/api/auth/google">
            <FcGoogle size={18} />
            <TextGoogle>Google</TextGoogle>
          </ButtonGoogle>
        </Google>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={schemaRegister}
          initialValues={initialValues}
        >
          <Form>
            <Title>
              Or log in using an email and password, after registering:
            </Title>
            <Label>
              <LabelText>Email:</LabelText>
              <Input type="email" name="email" placeholder="your@email.com" />
            </Label>
            <ErrorMessage name="email" render={msg => <Error>{msg}</Error>} />
            <Label>
              <LabelText>Password:</LabelText>
              <Input type="password" name="password" placeholder="Password" />
            </Label>
            <ErrorMessage
              name="password"
              render={msg => <Error>{msg}</Error>}
            />
            <ButtonGroup>
              <Button type="submit" name="login" onClick={handleClick}>
                Log in
              </Button>
              <Button type="button" name="register" onClick={handleClick}>
                Registration
              </Button>
            </ButtonGroup>
          </Form>
        </Formik>
      </FormBox>
    </>
  );
};
