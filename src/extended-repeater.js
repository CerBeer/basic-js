const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  var repeatStr = function(str, repeatTimes, separator) {
    if(str === '') return '';
    if(repeatTimes === 0) return str;
    let result = '';
    for (let i = 0; i < repeatTimes - 1; i += 1) {
      result = `${result}${str}${separator}`;
    }
    return `${result}${str}`;
  };

  const work_options = {
    repeatTimes: options['repeatTimes'] || 0,
    separator: options['separator'] || '+',
    addition: `${options['addition'] || ''}`,
    additionRepeatTimes: options['additionRepeatTimes'] || 0,
    additionSeparator: options['additionSeparator'] || '|',
  };
  if (typeof(options['addition']) !== 'undefined') work_options.addition = `${options['addition']}`;
  const work_str = `${str}`;
  const work_separator = repeatStr(work_options.addition, work_options.additionRepeatTimes, work_options.additionSeparator);
  const result = repeatStr(work_str + work_separator, work_options.repeatTimes, work_options.separator);
  return result;
}

module.exports = {
  repeater
};

return;

function assert_equal(answer, true_answer) {
  console.log(`is ${answer === true_answer} ${JSON.stringify(answer)} = ${JSON.stringify(true_answer)}`);
}

assert_equal(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
