#!/usr/bin/env node
'use strict';

const fs = require('fs');
const { promptManager } = require('./utils/promptManager');
const { gitDownloader } = require('./utils/gitDownloader');
const { templateData } = require('./data');
const PromptBuilder = require('./utils/promptBuilder');
const TemplateDataProcessor = require('./utils/templateDataProcessor');

const createDir = () => {
  if (process.argv.length > 2) {
    const dirName = process.argv[2];
    fs.mkdirSync(dirName);
    return dirName;

  } else {
    const defaultDirName = 'my-lambda';
    fs.mkdirSync(defaultDirName);
    return defaultDirName;
  }
};

const main = async() => {

  const templateDataProcessor = new TemplateDataProcessor(templateData);
  const promptBuilder = new PromptBuilder(templateDataProcessor);

  // Getting intro prompt
  const intro = `
Please help us to have more options (languages, frameworks, templates).
Come contribute at https://github.com/aws-lambda-template-generator`;

  console.log(intro);

  // Getting choices
  // (1) get language choice
  let languageId = await promptManager(promptBuilder.getLanguagePrompt());
  languageId = languageId === '' ? '1' : languageId;
  // (2) get framework choice
  let frameworkId = await promptManager(promptBuilder.getFrameworkPrompt(languageId));
  frameworkId = frameworkId === '' ? '1' : frameworkId;
  // (3) get example choice
  let exampleId = await promptManager(promptBuilder.getExamplePrompt(languageId, frameworkId));
  exampleId = exampleId === '' ? '1' : exampleId;

  // get url
  const url = templateDataProcessor.getUrl(languageId, exampleId);

  // create dir
  const dirName = createDir();

  // download template
  await gitDownloader(url, `./${dirName}`);
};

main();

