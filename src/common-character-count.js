const { NotImplementedError } = require("../extensions/index.js");

function getCommonCharacterCount(s1, s2) {
  const s1Chars = s1.split("");
  let commonCount = 0;

  for (let i = 0; i < s1Chars.length; i++) {
    if (s2.includes(s1Chars[i])) {
      commonCount++;
      s2 = s2.replace(s1Chars[i], "");
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
