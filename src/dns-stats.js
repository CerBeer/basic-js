const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  if (!Array.isArray(domains)) return {};
  if (domains.length === 0) return {};
  for (let domain of domains) {
    const da = domain.split('.');
    da.reduceRight((dname, element) => {
      dname = dname + '.' + element;
      result[dname] = (result[dname] || 0) + 1;
      return dname;
    }, '');
  }
  return result;
}

module.exports = {
  getDNSStats
};

return;

function assert_equal(answer, true_answer) {
  console.log(`is ${answer === true_answer} ${JSON.stringify(answer)} = ${JSON.stringify(true_answer)}`);
}

assert_equal(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 });
assert_equal(getDNSStats(['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
assert_equal(getDNSStats([]), {});
