import { nanoid } from '@reduxjs/toolkit';

const makePeriod = (year, month) => {
  return new Date(year, month, 1, 1, 0, 1);
};

export const createPeriods = (month = 8, year = 2022, period, periods = []) => {
  if (period) {
    const options = { month: 'long' };

    const mm = period.getMonth() + 1;
    const mmFormated = String(mm).length === 2 ? mm : `0${mm}`;

    periods.push({
      id: nanoid(),
      period: `${period.getFullYear()}-${mmFormated}`,
      month: new Intl.DateTimeFormat('en-US', options).format(period),
      mm: period.getMonth() + 1,
      year: period.getFullYear(),
    });
  }

  period = makePeriod(year, month);
  const now = new Date();

  if (now - period > 0) {
    if (month === 11) {
      month = 0;
      year += 1;
      createPeriods(month, year, period, periods);
    } else {
      month += 1;
      createPeriods(month, year, period, periods);
    }
  }

  return periods;
};
