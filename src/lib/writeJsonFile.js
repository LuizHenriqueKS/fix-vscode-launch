const fs = require('fs');

module.exports = function writeJsonFile(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};
