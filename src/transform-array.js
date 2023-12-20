const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const result = [];
  const status = [];
//  arr.forEach((val) => status.push(typeof(val) === 'number' ? 1 : 0));
  arr.forEach((val) => {
    switch(val) {
      case '--discard-next':
        status.push(0);
        break;
      case '--discard-prev':
        status.push(0);
        break;
      case '--double-next':
        status.push(0);
        break;
      case '--double-prev':
        status.push(0);
        break;
      default:
        status.push(1);
    }
  });
  arr.forEach((val, i) => {
    switch(val) {
      case '--discard-next':
        if (i < arr.length - 1) {
          status[i + 1] = status[i + 1] - 1;
        }
        break;

      case '--discard-prev':
        if (i > 0) {
          status[i - 1] = status[i - 1] - 1;
        }
        break;
    
      case '--double-next':
        if (i < arr.length - 1 && status[i + 1] > 0) {
          status[i + 1] = status[i + 1] - 1 + 2;
        }
        break;

      case '--double-prev':
        if (i > 0 && status[i - 1] > 0) {
          status[i - 1] = status[i - 1] - 1 + 2;
        }
        break;
    }
  });

  status.forEach((val, idx) => {
    if (val > 0) for (let i = 0; i < val; i += 1) result.push(arr[idx]);
  });
  
  return result;
}

module.exports = {
  transform
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal((transform([])), []);
assert_equal(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]), [1, 2, 3, 4, 5]);
assert_equal(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]), [1, 2, 3, 1337, 1337, 1337, 4, 5]);
assert_equal(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]), [1, 2, 3, 4, 5]);
assert_equal(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]), [1, 2, 3, 1337, 4, 5]);
