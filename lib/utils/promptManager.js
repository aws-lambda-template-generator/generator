#!/usr/bin/env node
'use strict';

const promptManager = async(prompt) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    readline.question(prompt, (answer, err) => {
      if (err) {
        reject('error in getting input');
      };

      readline.close();
      resolve(answer);
    });
  });
};

module.exports = {
  promptManager
};
