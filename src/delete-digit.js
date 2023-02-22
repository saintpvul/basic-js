const { NotImplementedError } = require("../extensions/index.js");

function deleteDigit(n) {
  const nStr = n.toString();
  let maxNum = 0;

  for (let i = 0; i < nStr.length; i++) {
    const numWithoutDigit = Number(nStr.slice(0, i) + nStr.slice(i + 1));

    if (numWithoutDigit > maxNum) {
      maxNum = numWithoutDigit;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit,
};
