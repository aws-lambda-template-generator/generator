#!/usr/bin/env node
'use strict';

const promptManager = async(prompt) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    readline.question(prompt, (answer) => {
      readline.close();
      resolve(answer);
    });
  });
};

module.exports = {
  promptManager
};
