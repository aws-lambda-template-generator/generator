#!/usr/bin/env node
'use strict';

const path = require('path');
const { promptManager } = require('./utils/promptManager');
const { templateGenerator } = require('./templateGenerator');

const templatePaths = {
  typescript: path.join(__dirname, '../templates/ts-simple-api'),
  javascript: path.join(__dirname, '../templates/js-simple-api')
};

const main = async() => {
  const languageInput = await promptManager();
  await templateGenerator(languageInput, templatePaths, '.');
};

main();
