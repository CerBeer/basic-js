const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  const f = [];
  matrix[0].forEach(_ => f.push(1));
  matrix.forEach(l => {
    l.forEach((v, i) => {
      r = (v * f[i]);
      result += r;
      if (r === 0) f[i] = 0;
    });
  });
  return result;
}

module.exports = {
  getMatrixElementsSum
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]), 9);

assert_equal(getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]), 15);

assert_equal(getMatrixElementsSum([
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
]), 18);

assert_equal(getMatrixElementsSum([
  [0],
]), 0);

assert_equal(getMatrixElementsSum([
  [1],
  [5],
  [0],
  [2],
]), 6);
