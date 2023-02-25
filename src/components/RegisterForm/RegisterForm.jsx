import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import {
  ButtonGroup,
  Button,
  FormBox,
  Input,
  Label,
  LabelText,
  Title,
  Error,
} from './RegisterForm.styled';
import { register } from 'redux/auth/authOperations';
import schemaRegister from 'schema/shemaRegister';

export const RegisterForm = ({ onBackToLogin }) => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  const handleSubmit = (initialValues, { resetForm }) => {
    dispatch(register(initialValues));
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schemaRegister}
        initialValues={initialValues}
      >
        <FormBox>
          <Title>
            Please, enter your email and create a password OR back to login:
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
          <ErrorMessage name="password" render={msg => <Error>{msg}</Error>} />
          <ButtonGroup>
            <Button>Sign up</Button>
            <Button type="button" onClick={onBackToLogin}>
              Back to login
            </Button>
          </ButtonGroup>
        </FormBox>
      </Formik>
    </>
  );
};
