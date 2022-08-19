/**
 * Convert date to a view
 * @param date
 * @returns {string}
 */
export const dateToView = (date) =>
  new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  });
