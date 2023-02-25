import { useMedia } from 'hooks/useMedia';
import { SpanTitle, SubTitle, Title, TitleBox } from './LoginTitle.styled';

export default function LoginTitle() {
  const { isMobile, isTablet, isDesktop } = useMedia();

  return (
    <TitleBox>
      {isDesktop && (
        <Title>
          Kapu<SpanTitle>s</SpanTitle>ta
        </Title>
      )}
      {isTablet && (
        <img
          src={process.env.PUBLIC_URL + '/images/title/KapustaTablet.png'}
          alt="title Kapusta"
        />
      )}
      {isMobile && (
        <img
          src={process.env.PUBLIC_URL + '/images/title/KapustaMobile.png'}
          alt="title Kapusta"
        />
      )}
      <SubTitle>Smart Finance</SubTitle>
    </TitleBox>
  );
}
