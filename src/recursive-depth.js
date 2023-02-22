const { NotImplementedError } = require("../extensions/index.js");
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let maxDepth = 1;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const depth = this.calculateDepth(element) + 1;
      maxDepth = Math.max(maxDepth, depth);
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
