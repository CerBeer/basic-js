const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  
  const result = [];
  const counter = {};
  for (let i = 0; i < names.length; i += 1) {
  
    if (typeof(counter[names[i]]) === 'undefined') {
      counter[names[i]] = 1;
      result.push(names[i]);
    } else {
      const newname = `${names[i]}(${counter[names[i]]})`;
      counter[names[i]] += 1;
      counter[newname] = 1;
      result.push(newname);
    }
  };

  return result;

}

module.exports = {
  renameFiles
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
assert_equal(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']), ['a', 'b', 'cd', 'b ', 'a(3)']);
assert_equal(renameFiles([]), []);
