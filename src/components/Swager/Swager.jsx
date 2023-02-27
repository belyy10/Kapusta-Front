import 'swiper/css';
import 'swiper/css/navigation';

import { Slide, SwagerBox, SwagerTitle } from './Swager.styled';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { useState } from 'react';

const periods = [
  'September 2022',
  'October 2022',
  'November 2022',
  'December 2022',
  'January 2023',
  'February 2023',
];

export default function Swager() {
  const [currentPeriod, setCurrentPeriod] = useState(null);

  console.log(currentPeriod);

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

          setCurrentPeriod(periods[activeIndex]);
        }}
      >
        {periods.map(period => (
          <Slide>{period}</Slide>
        ))}
      </Swiper>
    </SwagerBox>
  );
}
