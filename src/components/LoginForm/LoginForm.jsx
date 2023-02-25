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
import { logIn } from 'redux/auth/authOperations';
import schemaRegister from 'schema/shemaRegister';

export const LoginForm = ({ onRegistrationClick }) => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  const handleSubmit = (initialValues, { resetForm }) => {
    dispatch(logIn(initialValues));
    resetForm();
  };

  return (
    <>
      <FormBox>
        <Google>
          <TitleGoogle>You can log in with your Google Account:</TitleGoogle>
          <ButtonGoogle href="https://kapusta-deployment.onrender.com/api/users/google">
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
              <Button>Log in</Button>
              <Button type="button" onClick={onRegistrationClick}>
                Registration
              </Button>
            </ButtonGroup>
          </Form>
        </Formik>
      </FormBox>
    </>
  );
};
