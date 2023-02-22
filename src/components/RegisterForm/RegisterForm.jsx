import { Formik } from 'formik';
import {
  ButtonGoogle,
  ButtonGroup,
  Button,
  Form,
  Google,
  Input,
  Label,
  LabelText,
  TextGoogle,
  Title,
  TitleGoogle,
} from './RegisterForm.styled';
import { FcGoogle } from 'react-icons/fc';

export const RegisterForm = () => {
  return (
    <>
      <Formik>
        <Form>
          <Google>
            <TitleGoogle>You can log in with your Google Account:</TitleGoogle>
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
            <Input type="text" name="email" placeholder="your@email.com" />
          </Label>
          <Label>
            <LabelText>Password:</LabelText>
            <Input type="text" name="password" placeholder="Password" />
          </Label>
          <ButtonGroup>
            <Button>Log in</Button>
            <Button>Registration</Button>
          </ButtonGroup>
        </Form>
      </Formik>
    </>
  );
};