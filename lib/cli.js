#!/usr/bin/env node
'use strict';

const path = require('path');
const copy = require('recursive-copy');

copy(path.join(__dirname, '../templates/ts-simple-api'), '.', function(error, results) {
  if (error) {
      console.error('Copy failed: ' + error);
  } else {
      console.info('Copied ' + results.length + ' files');
  }
});