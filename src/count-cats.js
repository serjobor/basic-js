const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [...matrix];
  let count = 0;
  for (const key in arr) {
    let arr2 = [...arr[key]];
    for (const key2 in arr2) {
      if( arr2[key2] === '^^'){
        count += 1;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
