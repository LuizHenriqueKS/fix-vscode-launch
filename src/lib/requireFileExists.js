const fs = require('fs');
const FileNotFoundException = require('./FileNotFoundException');

module.exports = function requireFileExists(file) {
  if (!fs.existsSync(file)) {
    throw new FileNotFoundException(file);
  }
};
