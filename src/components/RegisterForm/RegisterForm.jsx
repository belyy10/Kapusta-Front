import {
  ButtonGoogle,
  ButtonGroup,
  ButtonLogin,
  ButtonReg,
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
    <Form>
      <Google>
        <TitleGoogle>You can log in with your Google Account:</TitleGoogle>
        <ButtonGoogle>
          <FcGoogle size={18} />
          <TextGoogle>Google</TextGoogle>
        </ButtonGoogle>
      </Google>

      <Title>Or log in using an email and password, after registering:</Title>
      <Label>
        <LabelText>Email:</LabelText>
        <Input type="text" name="email" placeholder="your@email.com" />
      </Label>
      <Label>
        <LabelText>Password:</LabelText>
        <Input type="text" name="password" placeholder="Password" />
      </Label>
      <ButtonGroup>
        <ButtonLogin>Log in</ButtonLogin>
        <ButtonReg>Registration</ButtonReg>
      </ButtonGroup>
    </Form>
  );
};
