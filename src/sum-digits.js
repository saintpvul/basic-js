const { NotImplementedError } = require("../extensions/index.js");

function getSumOfDigits(n) {
  let curr = n;

  while (curr.toString().length > 1) {
    curr = curr
      .toString()
      .split("")
      .reduce((s, v) => (s += +v), 0);
  }

  return curr;
}

module.exports = {
  getSumOfDigits,
};
