import reportsIcon from '../../images/icons.svg';
import { IconBox } from './IconMaker.styled';


export default function IconMaker({ category, bgColor, color }) {
  if (category === 'Products') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-products`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Alcohol') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-alcohol`}></use>
        </svg>
      </IconBox>
      
      )
  }
  if (category === 'Entertainment') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-entertainment`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Health') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-health`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Transport') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-transport`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Housing') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-housing`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Technique') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-technique`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Communal, communication') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-communal`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Sports, hobbies') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-sports`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Education') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-education`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Other') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-other`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Salary') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-salary`}></use>
        </svg>
      </IconBox>
      )
  }
  if (category === 'Add. income') {
    return (
      <IconBox  style={{backgroundColor: bgColor}}>
        <svg  width="59" height="57" fill={color}>
          <use href= {`${reportsIcon}#icon-add_income`}></use>
        </svg>
      </IconBox>
      )
  }
}
