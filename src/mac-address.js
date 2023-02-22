const { NotImplementedError } = require("../extensions/index.js");

function isMAC48Address(n) {
  return n.split("-").filter((hex) => /[0-9A-Fa-f]{2}/g.test(hex)).length === 8;
}
module.exports = {
  isMAC48Address,
};
