import { monthNames } from '../constants/months';
import { addLeadingZero } from './addLeadingZero';

export const formatDate = (date: Date): string => {
  const dateNumber = addLeadingZero(date.getDate());
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${dateNumber}, ${year}`;
};
