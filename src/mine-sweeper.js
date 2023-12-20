const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  
  const resultt = [];

  const outerhl = [];
  outerhl.push(9);
  matrix[0].forEach((line) => outerhl.push(9));
  outerhl.push(9);

  resultt.push(outerhl);
  matrix.forEach((line) => {
    const newLine = [];
    newLine.push(9);
    line.forEach((val) => {
      newLine.push(0);
    })
    newLine.push(9);
    resultt.push(newLine);
  });
  resultt.push(outerhl);

  matrix.forEach((line, li) => {
    line.forEach((val, vi) => {
      if (val) {
        resultt[li + 0][vi + 0] = resultt[li + 0][vi + 0] + 1;
        resultt[li + 0][vi + 1] = resultt[li + 0][vi + 1] + 1;
        resultt[li + 0][vi + 2] = resultt[li + 0][vi + 2] + 1;
        resultt[li + 1][vi + 0] = resultt[li + 1][vi + 0] + 1;
        resultt[li + 1][vi + 1] = resultt[li + 1][vi + 1] + 1;
        resultt[li + 1][vi + 2] = resultt[li + 1][vi + 2] + 1;
        resultt[li + 2][vi + 0] = resultt[li + 2][vi + 0] + 1;
        resultt[li + 2][vi + 1] = resultt[li + 2][vi + 1] + 1;
        resultt[li + 2][vi + 2] = resultt[li + 2][vi + 2] + 1;
      }
    })
  });

  matrix.forEach((line, li) => {
    line.forEach((val, vi) => {
      if (val) {
        resultt[li + 1][vi + 1] = 1;
      }
    })
  });

  const result = [];
  for (let i = 1; i < resultt.length - 1; i += 1) {
    result.push(resultt[i].slice(1, -1));
  }

  return result;
}

module.exports = {
  minesweeper
};

return;

function assert_equal(answer, true_answer) {
  answer_str = JSON.stringify(answer);
  true_answer_str = JSON.stringify(true_answer);
  reason = `${answer_str === true_answer_str}  `.slice(0, 6);
  console.log(`is ${reason} : ${answer_str} = ${true_answer_str}`);
}

assert_equal(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]),
  [
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1],
  ],
);

assert_equal(
  minesweeper([
    [false, false, false],
    [false, false, false],
  ]),
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
);
