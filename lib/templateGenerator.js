#!/usr/bin/env node
'use strict';

const { recursiveDirCopy } = require('./utils/recursiveDirCopy');
const { npmExecute } = require('./utils/npmExecute');



const templateGenerator = async(inputLanguage, templatePaths, outputPath) => {
  let copySuccess = false;

  switch (inputLanguage) {
  case '1':
    copySuccess = await recursiveDirCopy(templatePaths.typescript, outputPath);
    if (copySuccess) { npmExecute(outputPath); }
    break;
  case '2':
    copySuccess = await recursiveDirCopy(templatePaths.javascript, outputPath);
    if (copySuccess) { npmExecute(outputPath); }
    break;
  case '3':
    console.log('Python template is coming soon.');
    break;
  default:
    copySuccess = await recursiveDirCopy(templatePaths.typescript, outputPath);
    if (copySuccess) { npmExecute(outputPath); }
    break;
  }
};

module.exports = {
  templateGenerator
};
