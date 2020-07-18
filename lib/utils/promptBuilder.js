#!/usr/bin/env node
'use strict';

class PromptBuilder {

  constructor(templateDataProcessor) {
    this.templateDataProcessor = templateDataProcessor;
  }

  getFrameworkPrompt() {
    let frameworkOptions = '';
    this.templateDataProcessor.getFrameworks().map((data, index) => {
      frameworkOptions +=
`${index + 1}) ${data.frameworkName}
`;
    });
    return `
Choose framework:
${frameworkOptions}Please help us to have more framework options (e.g. sam-cli).
Come contribute: https://github.com/aws-lambda-template-generator
(default is 1): `;
  }

  getLanguagePrompt() {
    let languageOptions = '';
    this.templateDataProcessor.getLanguages().map((data, index) => {
      languageOptions +=
`${index + 1}) ${data.language}
`;
    });
    return `
Choose language:
${languageOptions}Please help us to have more language options.
Come contribute: https://github.com/aws-lambda-template-generator
(default is 1): `;
  }

  getExamplePrompt(languageId, frameworkId) {
    let exampleOptions = '';
    this.templateDataProcessor.getExamples(languageId, frameworkId).map((data, index) => {
      exampleOptions +=
`${index + 1}) ${data.templateName}
`;
    });
    return `
Choose Template:
${exampleOptions}Please help us to have more template options.
Come contribute: https://github.com/aws-lambda-template-generator
(default is 1): `;
  }
}

module.exports = PromptBuilder;
