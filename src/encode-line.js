const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  let prevChar = str[0];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prevChar) {
      count++;
    } else {
      if (count === 1) {
        result += prevChar;
      } else {
        result += count + prevChar;
      }
      prevChar = str[i];
      count = 1;
    }
  }

  return result;
}

console.log(encodeLine('attta'));

module.exports = {
  encodeLine
};
