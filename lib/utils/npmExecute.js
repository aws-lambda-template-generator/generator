#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');

const npmExecute = (targetDir) => {
  console.info('Installing dependencies...');
  execSync(`cd ${targetDir}`, {stdio:[0,1,2]});
  console.log(`current directory is: ${process.cwd()}`);
  execSync(`cd ${targetDir} && npm i`, {stdio:[0,1,2]});
  console.log('Running unit tests...');
  execSync(`cd ${targetDir} && npm run test`, {stdio:[0,1,2]});
};

module.exports = {
  npmExecute
};
