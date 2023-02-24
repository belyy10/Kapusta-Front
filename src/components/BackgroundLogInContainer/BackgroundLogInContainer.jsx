import { ContainerTop } from './BackgroundLogInContainer.styled';

export default function BackgroundLogInContainer({ children }) {
  return (
    <ContainerTop img={process.env.PUBLIC_URL + '/images/background.png'}>
      {children}
    </ContainerTop>
  );
}
