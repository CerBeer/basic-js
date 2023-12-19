const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== "string") return 0;
  if (typeof s2 !== "string") return 0;
  a1 = Array.from(s1);
  a2 = Array.from(s2);
  ch1 = [... new Set(a1)];

  const result = ch1.reduce((count, current) => {
      const count1 = a1.filter(x => x === current).length;
      const count2 = a2.filter(x => x === current).length;
      return count + Math.min(count1, count2);
    }, 0);

  return result;
}

module.exports = {
  getCommonCharacterCount
};

return;

function assert_equal(answer, true_answer) {
  console.log(`is ${answer === true_answer} ${answer} = ${true_answer}`);
}

assert_equal(getCommonCharacterCount('aabcc', 'adcaa'), 3);
assert_equal(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
assert_equal(getCommonCharacterCount('abca', 'xyzbac'), 3);
assert_equal(getCommonCharacterCount('', 'abc'), 0);
assert_equal(getCommonCharacterCount('a', 'b'), 0);
