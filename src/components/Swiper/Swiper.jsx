import 'swiper/css';
import 'swiper/css/navigation';
import { Slide, SwagerBox, SwagerTitle } from './Swiper.styled';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { setCurrentPeriod } from 'redux/transactions/transactionsSlice';
import { createPeriods } from 'helpers/createPeriods';
import { useState } from 'react';

export default function SwiperComponent() {
  const dispatch = useDispatch();
  const [periods] = useState(createPeriods());

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
