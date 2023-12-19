const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let fch = members.reduce((res, elem) => {
    if (typeof elem === 'string') {
      res.push(elem.trim()[0].toUpperCase() || '');
    }
    return res;
  }, []);

  result = fch.sort().join('');
  
  return result.length > 0 ? result : false;
}

module.exports = {
  createDreamTeam
};

return;

function assert_equal(answer, true_answer) {
  console.log(`is ${answer === true_answer} ${JSON.stringify(answer)} = ${JSON.stringify(true_answer)}`);
}

assert_equal(createDreamTeam(['Keith', 'Donna', 'Lawrence', 'Sophia', 'Jack', 'Kyle', 'Andrew', 'Natalie', 'Deborah', 'Noah']), 'ADDJKKLNNS');
assert_equal(createDreamTeam(['Sophia', 'Margaret', 'Maria', 'Wayne', 'Julie', 'Samantha', 'Deborah', 'Diana', 'Bruce', 'Jacob']), 'BDDJJMMSSW');
assert_equal(createDreamTeam(['Kevin', 'Timothy', 'Jeffrey', 'Albert', 'Laura', 'Karen', 'Steven', 'Diana', 'Sandra', 'Emma']), 'ADEJKKLSST');

assert_equal(createDreamTeam(3), false);
assert_equal(createDreamTeam(3.312312), false);
assert_equal(createDreamTeam(false), false);
assert_equal(createDreamTeam(null), false);
assert_equal(createDreamTeam(undefined), false);
assert_equal(createDreamTeam({ 'foo': 'bar' }), false);
