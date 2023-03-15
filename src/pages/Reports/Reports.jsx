import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Balance from 'components/Balance';
import CategoryContainer from 'components/CategoryContainer';
import Graphic from 'components/Graphic';
import Swager from 'components/Swiper';
import { IconLink, LinkToMain, IconLinkMain } from './Reports.styled';
import ReportInfo from 'components/ReportInfo';
import { useMedia } from 'hooks/useMedia';

export default function Reports() {
  const { isMobile } = useMedia();

  return (
    <BackgroundPrivateContainer>
      {isMobile ? (
        <>
          <LinkToMain to="/main">
            <IconLinkMain size={18} />
          </LinkToMain>
        </>
      ) : (
        <>
          <LinkToMain to="/main">
            <IconLink size={18} />
            Main Page
          </LinkToMain>
        </>
      )}

      {isMobile ? (
        <>
          <Swager />
          <Balance />
        </>
      ) : (
        <>
          <Balance />
          <Swager />
        </>
      )}
      <ReportInfo />
      <CategoryContainer />
      <Graphic />
    </BackgroundPrivateContainer>
  );
}
