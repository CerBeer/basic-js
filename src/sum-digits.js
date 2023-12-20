const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;
  let rch = `${result}`;
  while(rch.length > 1) {
    result = rch.split('').reduce((rez, val) => rez + parseInt(val), 0)
    rch = `${result}`;
  }

  return result;
}

module.exports = {
  getSumOfDigits
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(getSumOfDigits(91), 1);
assert_equal(getSumOfDigits(100), 1);
assert_equal(getSumOfDigits(35), 8);
assert_equal(getSumOfDigits(99), 9);
assert_equal(getSumOfDigits(123), 6);