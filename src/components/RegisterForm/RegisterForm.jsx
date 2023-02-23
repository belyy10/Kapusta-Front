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
} from './RegisterForm.styled';
import { FcGoogle } from 'react-icons/fc';
import { logIn, register } from 'redux/auth/authOperations';
import schemaRegister from 'schema/shemaRegister';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  const handleSubmit = (initialValues, { resetForm }) => {
    dispatch(logIn(initialValues));
    resetForm();
  };

  // function handleRegistration() {
  //   dispatch(register());
  // }

  // function handleLogin() {
  //   dispatch(logIn());
  // }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schemaRegister}
        initialValues={initialValues}
      >
        <Form>
          <FormBox>
            <Google>
              <TitleGoogle>
                You can log in with your Google Account:
              </TitleGoogle>
              <ButtonGoogle>
                <FcGoogle size={18} />
                <TextGoogle>Google</TextGoogle>
              </ButtonGoogle>
            </Google>

            <Title>
              Or log in using an email and password, after registering:
            </Title>
            <Label>
              <LabelText>Email:</LabelText>
              <Input type="email" name="email" placeholder="your@email.com" />
            </Label>
            <ErrorMessage render={msg => <Error>{msg}</Error>} name="email" />
            <Label>
              <LabelText>Password:</LabelText>
              <Input type="password" name="password" placeholder="Password" />
            </Label>
            <ErrorMessage
              render={msg => <Error>{msg}</Error>}
              name="password"
            />
            <ButtonGroup>
              <Button>Log in</Button>
              <Button>Registration</Button>
            </ButtonGroup>
          </FormBox>
        </Form>
      </Formik>
    </>
  );
};
