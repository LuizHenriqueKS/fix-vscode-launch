class Argument {
  isHelp() {
    if (this.argument) {
      return this.argument === '-help' || this.argument === '--help';
    }
    return false;
  }

  get argument() {
    if (process.argv.length > 2) {
      return process.argv[2];
    } else {
      return process.cwd();
    }
  }
}

module.exports = new Argument();
