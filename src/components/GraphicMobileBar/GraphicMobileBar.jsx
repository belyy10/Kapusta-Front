import { BarChart, Bar, YAxis, Cell, Text, XAxis } from 'recharts';
import COLORS from 'variables/colors/colors';

const CustomizedLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + 60 > x + width ? x + 60 : x + width}
      y={y}
      fontSize="10"
      fontFamily="Roboto"
      fill={COLORS.textColor}
      textAnchor="middle"
      dy={-4}
    >
      {value} UAH.
    </text>
  );
};

//x + width

const CustomizedTickLabel = ({ x, y, payload }) => {
  return (
    <Text
      x={x}
      y={y}
      dy={-12}
      dx={7}
      fill={COLORS.textColor}
      fontSize={10}
      fontFamily={'Roboto'}
    >
      {payload.value}
    </Text>
  );
};

export default function GraphicMobileBar({ transaction }) {
  return (
    <BarChart
      width={320}
      height={540}
      data={transaction}
      layout="vertical"
      barCategoryGap={36}
      margin={{ left: 0, right: 25 }}
    >
      <XAxis type="number" hide />
      <YAxis
        dataKey="name"
        type="category"
        axisLine={false}
        tickLine={false}
        tick={<CustomizedTickLabel />}
        width={1}
      />
      <Bar
        dataKey={'sum'}
        fill={COLORS.activeColor}
        radius={[0, 10, 10, 0]}
        label={<CustomizedLabel />}
        barSize={15}
      >
        {transaction.map((_, index) => (
          <Cell fill={index % 3 ? COLORS.barColor : COLORS.activeColor} />
        ))}
      </Bar>
    </BarChart>
  );
}
