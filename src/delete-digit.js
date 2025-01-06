const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return +[...('' + n)].sort().join('').slice(1).split('').sort((a, b) => {return b-a;}).join('');
  const strTmp = '' + n;
    const result = [];
    for (let i = 0; i < strTmp.length; i++) {
        result.push(strTmp.slice(0, i) + strTmp.slice(i + 1))
    }
    return Math.max(...result.map(item => +item));
}

module.exports = {
  deleteDigit
};
