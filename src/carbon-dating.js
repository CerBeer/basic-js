const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  const sa = parseFloat(sampleActivity) || false;
  if (!sa) return false;
  if (sa < 0) return false;
  if (sa > MODERN_ACTIVITY) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / sa) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample
};

function assert_equal(answer, true_answer) {
  console.log(`is ${answer === true_answer} ${answer} = ${true_answer}`);
}

assert_equal(dateSample('8.45786238798846'), 4738);
assert_equal(dateSample(3), false);
assert_equal(dateSample(3.312312), false);
assert_equal(dateSample(false), false);
assert_equal(dateSample(null), false);
assert_equal(dateSample(undefined), false);
assert_equal(dateSample([3]), false);
assert_equal(dateSample(['3']), false);
assert_equal(dateSample({ '3.14': '3dec' }), false);

assert_equal(dateSample(), false);

assert_equal(dateSample('ACTIVITY OVER 9000'), false);
assert_equal(dateSample('one'), false);
assert_equal(dateSample(''), false);
assert_equal(dateSample(' '), false);
assert_equal(dateSample(' \n\t\r'), false);

assert_equal(dateSample('9000'), false);
assert_equal(dateSample('15.1'), false);
assert_equal(dateSample('0'), false);
assert_equal(dateSample('-5'), false);
assert_equal(dateSample('-55.8'), false);

