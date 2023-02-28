import GraphicBar from 'components/GraphicBar';
import { GraphicBox, GraphicMobileBox } from './Graphic.styled';
import { useMedia } from 'hooks/useMedia';
import GraphicMobileBar from 'components/GraphicMobileBar';
import { selectDescriptionsByCategory } from 'redux/transactions/transactionsSelectors';
import { useSelector } from 'react-redux';

export default function Graphic() {
  const { isTabletAndDesktop, isMobile } = useMedia();
  const desriptions = useSelector(selectDescriptionsByCategory);

  console.log(desriptions);
  return (
    <>
      {isTabletAndDesktop && (
        <GraphicBox>
          <GraphicBar transaction={desriptions} />
        </GraphicBox>
      )}
      {isMobile && (
        <GraphicMobileBox>
          <GraphicMobileBar transaction={desriptions} />
        </GraphicMobileBox>
      )}
    </>
  );
}
