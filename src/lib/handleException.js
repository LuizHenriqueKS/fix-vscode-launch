const FileNotFoundException = require('./FileNotFoundException');

module.exports = function handleException(e) {
  if (e instanceof FileNotFoundException) {
    console.error('File not found:', e.file);
  } else {
    console.error(e);
  }
};
