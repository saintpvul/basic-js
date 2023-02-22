const { NotImplementedError } = require("../extensions/index.js");
function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      let numMines = 0;
      // check surrounding cells for mines
      for (let x = Math.max(0, i - 1); x <= Math.min(numRows - 1, i + 1); x++) {
        for (
          let y = Math.max(0, j - 1);
          y <= Math.min(numCols - 1, j + 1);
          y++
        ) {
          if (x !== i || y !== j) {
            if (matrix[x][y]) {
              numMines++;
            }
          }
        }
      }
      row.push(numMines);
    }
    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper,
};
