const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const resultt = arr.filter((val) => val !== -1);
  resultt.sort((a, b) => a - b);
  let ind = 0;
  arr.forEach((val) => {
    if(val === -1) result.push(-1);
    else {
      result.push(resultt[ind]);
      ind += 1;
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(
  sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]),
  [-1, 150, 160, 170, -1, -1, 180, 190],
);
assert_equal(
  sortByHeight([-1, -1, -1, -1, -1]),
  [-1, -1, -1, -1, -1],
);
assert_equal(
  sortByHeight([-1]),
  [-1],
);
assert_equal(
  sortByHeight([4, 2, 9, 11, 2, 16]),
  [2, 2, 4, 9, 11, 16],
);
assert_equal(
  sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]),
  [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
);
