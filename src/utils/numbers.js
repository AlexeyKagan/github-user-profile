/**
 * Return number in 'k' format, e.g. 1200 => 1.2k
 * @param num
 * @returns {string|number}
 */
export const kFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
