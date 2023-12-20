const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(typeof(value) === 'undefined') this.chain.push(' ');
    else this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if(typeof(position) !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    if(position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.reduce((rez, vol) => `${rez}~~( ${vol} )`, '').slice(2);
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
assert_equal(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain(), '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');
assert_equal(chainMaker.reverseChain().reverseChain().addLink('DEF').addLink(NaN).reverseChain().addLink(333).reverseChain().addLink('GHI').addLink('ABC').addLink({ 0: 'first', 1: 'second', 'length': 2 }).finishChain(), '( 333 )~~( DEF )~~( NaN )~~( GHI )~~( ABC )~~( [object Object] )');
assert_equal(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(), '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
assert_equal(chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain(), '( 8.963 )~~( 0 )~~( false )');
assert_equal(chainMaker.addLink(null).addLink(false).addLink(22).reverseChain().reverseChain().removeLink(2).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink('DEF').finishChain(), '( [object Object] )~~( 22 )~~( null )~~( DEF )');
assert_equal(chainMaker.addLink(3.14).addLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink('DEF').addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink(true).addLink(false).addLink(333).reverseChain().reverseChain().finishChain(), '( [object Object] )~~( DEF )~~( [object Object] )~~( true )~~( false )~~( 333 )');
assert_equal(chainMaker.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain(), '( 1.233 )~~( 1.233 )~~( DEF )~~( [object Object] )~~( ABC )');

//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0);
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd');
//chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2);
chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);