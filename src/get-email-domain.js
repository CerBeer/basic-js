const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = email.split('@');
  if (result.length < 2) return email;
  return result[result.length - 1];
}

module.exports = {
  getEmailDomain
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(getEmailDomain('prettyandsimple@example.com'), 'example.com');
assert_equal(getEmailDomain('someaddress@yandex.ru'), 'yandex.ru');
assert_equal(getEmailDomain('very.unusual.@.unusual.com@usual.com'), 'usual.com');
assert_equal(getEmailDomain('admin@mailserver2.ru'), 'mailserver2.ru');
assert_equal(getEmailDomain('example-indeed@strange-example.com'), 'strange-example.com');
