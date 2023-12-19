const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / ((turnsSpeed / 60) / 60));

  const result = {
    turns: turns,
    seconds: seconds,
  };

  return result;
}

module.exports = {
  calculateHanoi
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(calculateHanoi(3, 4941), { turns: 7, seconds: 5 });
assert_equal(calculateHanoi(39, 4005), { turns: 549755813887, seconds: 494162529336 });
assert_equal(calculateHanoi(12, 4071), { turns: 4095, seconds: 3621 });
assert_equal(calculateHanoi(4, 4504), { turns: 15, seconds: 11 });
assert_equal(calculateHanoi(10, 4050), { turns: 1023, seconds: 909 });
assert_equal(calculateHanoi(19, 4913), { turns: 524287, seconds: 384171 });
assert_equal(calculateHanoi(26, 4253), { turns: 67108863, seconds: 56805056 });
assert_equal(calculateHanoi(5, 4446), { turns: 31, seconds: 25 });
assert_equal(calculateHanoi(19, 4393), { turns: 524287, seconds: 429645 });
assert_equal(calculateHanoi(39, 4421), { turns: 549755813887, seconds: 447663634922 });
assert_equal(calculateHanoi(14, 4179), { turns: 16383, seconds: 14113 });
