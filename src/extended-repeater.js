const { NotImplementedError } = require("../extensions/index.js");

function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || "+";
  const addition = options.addition === undefined ? "" : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  const repeatedAddition = new Array(additionRepeatTimes)
    .fill(`${addition}`)
    .join(additionSeparator);

  const repeatedString = new Array(repeatTimes)
    .fill(`${str}${repeatedAddition}`)
    .join(separator);

  return repeatedString;
}

module.exports = {
  repeater,
};
