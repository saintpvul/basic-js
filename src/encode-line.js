const { NotImplementedError } = require("../extensions/index.js");

function encodeLine(str) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (i === str.length || str[i] !== str[i - 1]) {
      result += count > 1 ? count + str[i - 1] : str[i - 1];
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};

console.log(encodeLine("aabbbc"));
