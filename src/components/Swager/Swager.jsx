import 'swiper/css';
import 'swiper/css/navigation';

import { Slide, SwagerBox, SwagerTitle } from './Swager.styled';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';

const periods = [
  {
    month: 'September',
    year: 2022,
    mm: 9,
  },
  {
    month: 'October',
    year: 2022,
    mm: 10,
  },
  {
    month: 'November',
    year: 2022,
    mm: 11,
  },
  {
    month: 'December',
    year: 2022,
    mm: 12,
  },
  {
    month: 'January',
    year: 2023,
    mm: 1,
  },
  {
    month: 'February',
    year: 2023,
    mm: 2,
  },
];

export default function Swager({ setCurrentTime }) {
  return (
    <SwagerBox>
      <SwagerTitle>Current period: </SwagerTitle>
      <Swiper
        navigation
        modules={[Navigation]}
        className="mySwiper"
        style={{
          '--swiper-pagination-color': '#FF751D',
          '--swiper-navigation-color': '#FF751D',
        }}
        onSlideChange={swiperCore => {
          const { activeIndex } = swiperCore;

          setCurrentTime(periods[activeIndex]);
        }}
      >
        {periods.map((period, index) => (
          <Slide key={index}>
            {period.month}
            <span> {period.year}</span>
          </Slide>
        ))}
      </Swiper>
    </SwagerBox>
  );
}
