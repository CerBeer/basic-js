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
  if (typeof n !== "number") return 0;
  let result = Math.floor(n / 10);
  const na = Array.from(n.toString());
  for (let i = 0; i < na.length - 1; i += 1) {
    const na1 = na.filter((item, index) => index !== i);
    result = Math.max(result, parseInt(na1.join('')));
  }
  return result;
}

module.exports = {
  deleteDigit
};

return;

function assert_equal(answer, true_answer) {
  console.log(`is ${answer === true_answer} ${answer} = ${true_answer}`);
}

assert_equal(deleteDigit(152), 52);
assert_equal(deleteDigit(1001), 101);
assert_equal(deleteDigit(10), 1);
assert_equal(deleteDigit(222219), 22229);
assert_equal(deleteDigit(109), 19);
assert_equal(deleteDigit(342), 42);
