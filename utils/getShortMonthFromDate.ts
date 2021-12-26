export const getShortMonthFromDate = (date: Date): string =>
  new Date(date).toLocaleString('default', { month: 'short' });
