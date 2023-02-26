import {
  DataSlider,
  DataSliderBox, 
  DataSliderTitle,
  Period
} from './SliderBox.styled'



// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { months } from './data';

export default function SliderBox({ 
  currentMonth,
  currentYear,
  onHandleClickRight,
  onHandleClickLeft,}) {
    const monthToString = String(currentMonth);
    const selectMonth = months.filter(el => el.id === monthToString);
  return (
    
    <DataSliderBox>
        <DataSliderTitle>
          Current period:
        </DataSliderTitle>
        {/* <div >
        <ArrowBackIosIcon
          style={{ color: '#FF751D', width: '12', cursor: 'pointer' }}
          onClick={onHandleClickLeft}
        />
        {
          <span>{`${selectMonth[0].name} ${currentYear}`}</span>
        }

        <ArrowForwardIosIcon
          style={{ color: '#FF751D', width: '12', cursor: 'pointer' }}
          onClick={onHandleClickRight}
        />
      </div> */}
        <DataSlider >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" 
          style={{  
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={onHandleClickLeft}>
          <path d="M6 1L2 6L6 11" stroke="#FF751D" stroke-width="2"/>
        </svg>

          <Period>November 2019</Period>

          <svg width="7" height="12" viewBox="0 0 7 12" fill="none"  
          
          style={{  
            cursor: 'pointer',
            flexShrink: 0,
          }}
          onClick={onHandleClickRight}>
          <path d="M1 1L5 6L1 11" stroke="#FF751D" stroke-width="2"/>
        </svg>
        </DataSlider>
      </DataSliderBox>
  )

}