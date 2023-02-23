import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  Cell,
  Text,
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

const CustomizedLabel = ({ x, y, _, value }) => {
  return (
    <text
      x={x}
      y={y}
      dy={-8}
      dx={20}
      fontSize="12"
      fontFamily="Roboto"
      fill={COLORS.textColor}
      textAnchor="middle"
    >
      {value} UAH.
    </text>
  );
};

const CustomizedTickLabel = ({ x, y, payload }) => {
  return (
    <Text
      x={x}
      y={y}
      dy={4}
      dx={-15}
      fill={COLORS.textColor}
      fontSize={12}
      fontFamily={'Roboto'}
    >
      {payload.value}
    </Text>
  );
};

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

  const sortGriphicTransact = graphicTransact.sort(
    (firstEl, secondEl) => secondEl.sum - firstEl.sum
  );

  return (
    <GraphicBox>
      <ResponsiveContainer>
        <BarChart
          data={sortGriphicTransact}
          stackOffset={'expand'}
          margin={{
            top: 50,
            right: 150,
            left: 150,
            bottom: 5,
          }}
          barGap={25}
        >
          <CartesianGrid vertical={false} stroke={COLORS.bgTableTitle} />
          <XAxis
            dataKey="name"
            padding={{ left: 77, right: 77 }}
            axisLine={false}
            tickLine={false}
            tick={<CustomizedTickLabel />}
          />
          <YAxis tickCount={9} hide={true} />
          <Tooltip />

          <Bar
            dataKey="sum"
            fill={COLORS.activeColor}
            minPointSize={5}
            radius={[10, 10, 0, 0]}
            label={<CustomizedLabel />}
            barSize={35}
          >
            {/* <LabelList dataKey="sum" position="top" /> */}
            {monthTransaction.map((_, index) => (
              <Cell fill={index % 3 ? COLORS.barColor : COLORS.activeColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </GraphicBox>
  );
}
