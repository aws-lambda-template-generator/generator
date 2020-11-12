#!/usr/bin/env node
'use strict';

const download = require('download-git-repo');

const gitDownloader = async(repoUrl, outputPath) => {
  return new Promise((resolve, reject) => {
    download(repoUrl, outputPath, (err) => {
      if (err) {
        console.log(`Error in downloading template: ${err}`);
        reject(false);
      }
      console.log('Successfully generated template! Ready to build your own Lambda service!');
      resolve(true);
    });
  });
};

module.exports = {
  gitDownloader
};

