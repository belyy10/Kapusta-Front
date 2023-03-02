import 'swiper/css';
import 'swiper/css/navigation';

import { Slide, SwagerBox, SwagerTitle } from './Swager.styled';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { setCurrentPeriod } from 'redux/transactions/transactionsSlice';
import { nanoid } from '@reduxjs/toolkit';

const periods = [
  { id: nanoid(), month: 'March', year: 2023, mm: 3 },
  { id: nanoid(), month: 'February', year: 2023, mm: 2 },
  { id: nanoid(), month: 'January', year: 2023, mm: 1 },

  { id: nanoid(), month: 'December', year: 2022, mm: 12 },
  { id: nanoid(), month: 'November', year: 2022, mm: 11 },
  {
    id: nanoid(),
    month: 'October',
    year: 2022,
    mm: 10,
  },
  {
    id: nanoid(),
    month: 'September',
    year: 2022,
    mm: 9,
  },
];

export default function Swager() {
  const dispatch = useDispatch();

  const reversedPeriod = periods.reverse();

  return (
    <SwagerBox>
      <SwagerTitle>Current period: </SwagerTitle>
      <Swiper
        loop={true}
        navigation
        modules={[Navigation]}
        className="mySwiper"
        style={{
          '--swiper-pagination-color': '#FF751D',
          '--swiper-navigation-color': '#FF751D',
        }}
        onSlideChange={swiperCore => {
          const { activeIndex } = swiperCore;

          dispatch(setCurrentPeriod(periods[activeIndex]));
        }}
      >
        {reversedPeriod.map(period => (
          <Slide key={period.id}>
            {period.month}
            <span> {period.year}</span>
          </Slide>
        ))}
      </Swiper>
    </SwagerBox>
  );
}
