import { ContainerTop, Container } from './BackgroundLogInContainer.styled';

export default function BackgroundLogInContainer({ children }) {
  return (
    <Container
      groupImg={process.env.PUBLIC_URL + '/images/groupCabbage.png'}
      img={process.env.PUBLIC_URL + '/images/cabbage.png'}
    >
      <ContainerTop
        img={process.env.PUBLIC_URL + '/images/background.png'}
        cabbage={process.env.PUBLIC_URL + '/images/cabbage.png'}
      >
        {children}
      </ContainerTop>
    </Container>
  );
}
