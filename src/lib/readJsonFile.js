const fs = require('fs');
const Hjson = require('hjson');

module.exports = function readJsonFile(file) {
  const content = fs.readFileSync(file).toString();
  return Hjson.parse(content);
};
