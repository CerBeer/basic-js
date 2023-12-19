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
  
  if (typeof str !== "string") return '';
  
  const counter = str.split('').reduce((res, curr) => {
    if (res[res.length - 1][0] !== curr) {
      res.push([curr, 1]);
    } else {
      res[res.length - 1][1] += 1;
    }
    return res;
  }, [['', 0]]);

  const result = counter.reduce((res, curr) => `${res}${(curr[1] > 1) ? curr[1] : ''}${curr[0]}`, '');

  return result;
}

module.exports = {
  encodeLine
};

return;

function assert_equal(answer, true_answer) {
  console.log(`is ${answer === true_answer} ${JSON.stringify(answer)} = ${JSON.stringify(true_answer)}`);
}

assert_equal(encodeLine('aaaatttt'), '4a4t');
assert_equal(encodeLine('aabbccc'), '2a2b3c');
assert_equal(encodeLine('abbcca'), 'a2b2ca');
assert_equal(encodeLine('xyz'), 'xyz');
assert_equal(encodeLine(''), '');
