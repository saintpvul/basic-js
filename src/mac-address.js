const { NotImplementedError } = require("../extensions/index.js");
function isMAC48Address(n) {
  return /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/.test(n);
}

module.exports = {
  isMAC48Address,
};
