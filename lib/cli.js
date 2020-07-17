#!/usr/bin/env node
'use strict';

const path = require('path');
const copy = require('recursive-copy');
const { exec } = require('child_process');

const options = {
  dot: true
};

copy(path.join(__dirname, '../templates/ts-simple-api'), '.', function(error, results) {
  if (error) {
      console.error('Copy failed: ' + error);
  } else {
      console.info('Copied ' + results.length + ' files');
      console.info('Installing dependencies...');
      exec('npm i');
      console.log('Running unit tests...');
      exec('npm run test')
  }
});