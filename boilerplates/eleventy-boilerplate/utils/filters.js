const { DateTime } = require('luxon');

module.exports = {
  /**
   * Format date to given format
   * @param {string} date
   * @param {string} format
   * @return {string}
   */
  dateToFormat: function (date, format) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(String(format));
  },

  /**
   * Format date to ISO format
   * @param {string} date
   * @return {string}
   */
  dateToISO: function (date) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
      includeOffset: false,
      suppressMilliseconds: true,
    });
  },

  /**
   * Obfuscate string
   * @param {string} str
   * @return {string}
   */
  obfuscate: function (str) {
    const chars = [];
    for (let i = str.length - 1; i >= 0; i--) {
      chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }
    return chars.join('');
  },
};
