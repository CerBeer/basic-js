const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }
 
  encrypt(message, key) {
		return this.encrypt_decrypt(message, key);
  }

  decrypt(message, key) {
		return this.encrypt_decrypt(message, key, false);
  }

  encrypt_decrypt(message, key, encrypt = true) {
    
    if (typeof message !== "string") throw new Error("Incorrect arguments!");
    if (typeof key !== "string") throw new Error("Incorrect arguments!");
    if (message.length * key.length === 0) throw new Error("Incorrect arguments!");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const a = alphabet.split('');
    const aS = alphabet[0];
    const aE = alphabet.at(-1);
		const m = message.toUpperCase().split('');
    const repeatK = Math.ceil(message.length / key.length);
		let k = key.toUpperCase().split('');
    for (let i = 1; i < repeatK; i += 1) {
      k = k.concat(k);
    };

    let result = [];
		let iC = 0;
    m.forEach((v, i) => {
			if (v < aS || v > aE) {
        result.push(message[i]);
        iC += 1;
      }
      else {
        let ind = 0;
        if (encrypt) ind = (a.indexOf(v) + a.indexOf(k[i - iC])) % a.length;
        else ind = (a.indexOf(v) - a.indexOf(k[i - iC]) + a.length) % a.length;
        result.push(a[ind]);
      };
		});
    if (!this.type) result.reverse();
		return result.join('');
  }

}

module.exports = {
  VigenereCipheringMachine
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

assert_equal(directMachine.encrypt('attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!');
assert_equal(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'), 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.');
assert_equal(directMachine.encrypt('cryptography', 'verylongkeyword'), 'XVPNECTXKTFU');
assert_equal(directMachine.encrypt('Samelengthkey', 'Samelengthkey'), 'KAYIWIAMMOUIW');
assert_equal(directMachine.encrypt('Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW');
assert_equal(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'), 'LEARN FRONTEND DEVELOPMENT :)');
assert_equal(directMachine.decrypt('ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes'), 'ROLLING SCOPES SHOOL RULES!');
assert_equal(directMachine.decrypt('TRVVFB VT JSUIFMYL!', 'learning'), 'INVEST IN YOURSELF!');
assert_equal(directMachine.decrypt('HSVD AJAL ^^', 'behappy'), 'GOOD LUCK ^^');
assert_equal(reverseMachine.encrypt('attack at dawn!', 'alphonse'), '!ULLD XS XQHIEA');
assert_equal(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'), '!NWAD TA KCATTA');