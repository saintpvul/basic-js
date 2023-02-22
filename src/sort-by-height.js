const { NotImplementedError } = require("../extensions/index.js");

function sortByHeight(arr) {
  const heights = arr.filter((height) => height !== -1).sort((a, b) => a - b);
  return arr.map((height) => (height === -1 ? -1 : heights.shift()));
}

module.exports = {
  sortByHeight,
};
