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

export default function GraphicBar({ sortGriphicTransact }) {
  return (
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
          {sortGriphicTransact.map((_, index) => (
            <Cell fill={index % 3 ? COLORS.barColor : COLORS.activeColor} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
