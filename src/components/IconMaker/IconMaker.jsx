import reportsIcon from '../../images/icons.svg';
import { IconBox } from './IconMaker.styled';

export default function IconMaker({ category, bgColor, color }) {
  if (category === 'products') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-products`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'alcohol') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-alcohol`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'entertainment') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-entertainment`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'health') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-health`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'transport') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-transport`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'housing') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-housing`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'technique') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-technique`}></use>
        </svg>
      </IconBox>
    );
  }
  // if (category === 'communal, communication') {
    if (category === 'communal') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-communal`}></use>
        </svg>
      </IconBox>
    );
  }
  // if (category === 'sports, hobbies') {
    if (category === 'sports') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-sports`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'education') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-education`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'other') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-other`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'salary') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-salary`}></use>
        </svg>
      </IconBox>
    );
  }
  if (category === 'add.income') {
    return (
      <IconBox style={{ backgroundColor: bgColor }}>
        <svg width="59" height="57" fill={color}>
          <use href={`${reportsIcon}#icon-add-income`}></use>
        </svg>
      </IconBox>
    );
  }
}
