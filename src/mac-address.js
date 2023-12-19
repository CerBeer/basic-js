const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const groups = n.toUpperCase().split('-');
  const groups2 = groups.filter((pair) => pair.length === 2);
  if (groups2.length !== 6) return false;
  const groups3 = groups.join('').split('').filter((char) => char >= '0' && char <= 'F');
  return groups3.length === 12;
}
module.exports = {
  isMAC48Address
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(isMAC48Address('00-1B-63-84-45-E6'), true);
assert_equal(isMAC48Address('Z1-1B-63-84-45-E6'), false);
assert_equal(isMAC48Address('not a MAC-48 address'), false);
assert_equal(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
assert_equal(isMAC48Address('G0-00-00-00-00-00'), false);
