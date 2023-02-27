import GraphicBar from 'components/GraphicBar';
import { GraphicBox, GraphicMobileBox } from './Graphic.styled';
import { useMedia } from 'hooks/useMedia';
import GraphicMobileBar from 'components/GraphicMobileBar';

const monthTransaction = [
  {
    id: 1,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 31242142354235234525234523,
    date: '21.09.2019',
    description: 'ali',
    category: 'car',
    sum: 20300,
  },
  {
    id: 31242142354235234525234523,
    date: '21.09.2019',
    description: 'alic',
    category: 'car',
    sum: 11433,
  },
  {
    id: 12,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 13321,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 14,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 41,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 13,
    date: '21.09.2019',
    description: 'brakes',
    category: 'car',
    sum: 2000,
  },
  {
    id: 133,
    date: '21.09.2019',
    description: 'brakes',
    category: 'car',
    sum: 2000,
  },
  {
    id: 132,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 1432423,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: 142,
    date: '21.09.2019',
    description: 'optics',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'optics',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'optics',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'optics',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'weels',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'weels',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'weels',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'weels',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'weels',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'weels',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'disk',
    category: 'car',
    sum: 13000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'plastic',
    category: 'car',
    sum: 3000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'mirror',
    category: 'car',
    sum: 5000,
  },
  {
    id: Math.random(),
    date: '21.09.2019',
    description: 'driver',
    category: 'car',
    sum: 7775,
  },
];

export default function Graphic() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  const graphicTransact = monthTransaction.reduce(
    (prev, { description, sum }) => {
      const index = prev.findIndex(option => option.name === description);

      if (index !== -1) {
        prev[index].sum += sum;
        return prev;
      }

      prev.push({ name: description, sum: sum });
      return prev;
    },
    []
  );
  const sortGriphicTransact = graphicTransact.sort(
    (firstEl, secondEl) => secondEl.sum - firstEl.sum
  );

  return (
    <>
      {isTabletAndDesktop && (
        <GraphicBox>
          <GraphicBar transaction={sortGriphicTransact} />
        </GraphicBox>
      )}
      {isMobile && (
        <GraphicMobileBox>
          <GraphicMobileBar transaction={sortGriphicTransact} />
        </GraphicMobileBox>
      )}
    </>
  );
}
