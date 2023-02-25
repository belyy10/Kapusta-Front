import { Container, ContainerTop } from './BackgroundPrivateContainer.styled';

export default function BackgroundPrivateContainer({ children }) {
  return (
    <Container
      groupImg={process.env.PUBLIC_URL + '/images/groupCabbage.png'}
      img={process.env.PUBLIC_URL + '/images/background.png'}
    >
      <ContainerTop>{children}</ContainerTop>
    </Container>
  );
}
