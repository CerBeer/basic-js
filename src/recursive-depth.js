const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let resultCurr = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) resultCurr = Math.max(resultCurr, this.calculateDepth(element));
    });
    result = result + resultCurr;
    return result;
  }
}

module.exports = {
  DepthCalculator
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

const depthCalc = new DepthCalculator();
assert_equal(depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
assert_equal(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 31);
assert_equal(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
assert_equal(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 5);
assert_equal(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);
assert_equal(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 25);
assert_equal(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
assert_equal(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 15);
assert_equal(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]), 8);
assert_equal(depthCalc.calculateDepth([[[[[[[[[[]]]]]]]]]]), 10);
