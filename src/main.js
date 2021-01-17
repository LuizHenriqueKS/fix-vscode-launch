#!/usr/bin/env node

const path = require('path');
const argument = require('./lib/argument');
const handleException = require('./lib/handleException');
const requireFileExists = require('./lib/requireFileExists');
const readJsonFile = require('./lib/readJsonFile');
const writeJsonFile = require('./lib/writeJsonFile');

try {
  if (argument.isHelp()) {
    console.log('How to use:');
    console.log('\tnpx fix-vscode-launch');
    console.log('\tnpx fix-vscode-launch <project_path>');
  } else {
    const cwd = argument.argument;
    const launchFile = path.join(cwd, '.vscode/launch.json');
    const outLaunchFile = path.join(cwd, '.vscode/fixed-launch.json');
    requireFileExists(launchFile);
    const launch = readJsonFile(launchFile);
    for (const conf of launch.configurations) {
      conf.resolveSourceMapLocations = [
        '$' + '{workspaceFolder}/**',
        '!**/node_modules/**'
      ];
    }
    writeJsonFile(outLaunchFile, launch);
  }
} catch (e) {
  handleException(e);
}
