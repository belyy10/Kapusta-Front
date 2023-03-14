import 'swiper/css';
import 'swiper/css/navigation';
import { Slide, SwagerBox, SwagerTitle } from './Swiper.styled';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { setCurrentPeriod } from 'redux/transactions/transactionsSlice';
import { nanoid } from '@reduxjs/toolkit';

const periods = [
  {
    id: nanoid(),
    month: 'September',
    year: 2022,
    mm: 9,
    period: '2022-09',
  },
  {
    id: nanoid(),
    month: 'October',
    year: 2022,
    mm: 10,
    period: '2022-10',
  },
  { id: nanoid(), month: 'November', year: 2022, mm: 11, period: '2022-11' },
  { id: nanoid(), month: 'December', year: 2022, mm: 12, period: '2022-12' },
  { id: nanoid(), month: 'January', year: 2023, mm: 1, period: '2023-01' },
  { id: nanoid(), month: 'February', year: 2023, mm: 2, period: '2023-02' },
  { id: nanoid(), month: 'March', year: 2023, mm: 3, period: '2023-03' },
];

export default function SwiperComponent() {
  const dispatch = useDispatch();

  return (
    <SwagerBox>
      <SwagerTitle>Current period: </SwagerTitle>
      <Swiper
        initialSlide={periods.length}
        navigation
        modules={[Navigation]}
        className="mySwiper"
        style={{
          '--swiper-navigation-color': '#FF751D',
        }}
        onSlideChange={swiperCore => {
          const { activeIndex } = swiperCore;

          dispatch(setCurrentPeriod(periods[activeIndex]));
        }}
      >
        {periods.map(period => (
          <Slide key={period.id}>
            {period.month}
            <span> {period.year}</span>
          </Slide>
        ))}
      </Swiper>
    </SwagerBox>
  );
}
