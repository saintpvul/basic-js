const { NotImplementedError } = require("../extensions/index.js");
function renameFiles(names) {
  const result = {};
  return names.map((name) => {
    if (name in result) {
      let newName = `${name}(${result[name]})`;
      while (newName in result) {
        result[name]++;
        newName = `${name}(${result[name]})`;
      }
      result[newName] = 1;
      return newName;
    } else if (name in Object.values(result)) {
      let newName = `${name}(1)`;
      while (newName in result) {
        result[name]++;
        newName = `${name}(${result[name]})`;
      }
      result[newName] = 1;
      return newName;
    } else {
      result[name] = 1;
      return name;
    }
  });
}

module.exports = {
  renameFiles,
};
