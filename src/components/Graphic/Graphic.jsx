import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  LabelList,
  CartesianGrid,
} from 'recharts';
import COLORS from 'variables/colors/colors';
import { GraphicBox } from './Graphic.styled';

const monthTransaction = [
  {
    id: 1,
    date: '21.09.2019',
    description: 'salary',
    category: 'car',
    sum: 2000,
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
    sum: 2000,
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

  console.log(graphicTransact);

  return (
    <GraphicBox>
      <BarChart
        width={600}
        height={300}
        data={graphicTransact}
        stackOffset={'expand'}
        margin={{
          top: 50,
          right: 20,
          left: 20,
          bottom: 5,
        }}
        barGap={25}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <Tooltip />

        <Bar dataKey="sum" fill={COLORS.activeColor} minPointSize={5}>
          <LabelList dataKey="sum" position="top" />
        </Bar>
      </BarChart>
    </GraphicBox>
  );
}
