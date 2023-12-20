const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (typeof date === 'undefined') return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error("Invalid date!");
  if (Object.getOwnPropertyNames(date).length > 0) throw new Error("Invalid date!");
  
  const seasons = [
    'winter',
    'spring',
    'summer',
    'autumn',
  ];

  let m = date.getMonth() + 2;
  if (m > 12) m = 1;
  const s = Math.ceil(m / 3) - 1;
  return `${seasons[s]}`;
}

module.exports = {
  getSeason
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(getSeason(new Date(2150, 7, 21, 18, 36, 41, 841)), 'summer');
assert_equal(getSeason(new Date(83, 9, 25, 16, 20, 23, 544)), 'autumn');
assert_equal(getSeason(new Date(81, 10, 13, 12, 50, 13, 493)), 'autumn');
assert_equal(getSeason(new Date(481, 1, 5, 21, 58, 37, 272)), 'winter');
assert_equal(getSeason(new Date(369, 9, 26, 4, 38, 0, 377)), 'autumn');
assert_equal(getSeason(new Date(866, 2, 10, 12, 53, 10, 825)), 'spring');
assert_equal(getSeason(new Date(2455, 5, 24, 5, 17, 19, 809)), 'summer');
assert_equal(getSeason(new Date(1726, 7, 22, 23, 9, 55, 515)), 'summer');
assert_equal(getSeason(new Date(655, 0, 1, 4, 56, 39, 676)), 'winter');
assert_equal(getSeason(new Date(655, 11, 1, 4, 56, 39, 676)), 'winter');
getSeason(new Date());
getSeason();