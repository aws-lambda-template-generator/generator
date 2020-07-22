#!/usr/bin/env node
'use strict';

class PromptBuilder {

  constructor(templateDataProcessor) {
    this.templateDataProcessor = templateDataProcessor;
  }

  getFrameworkPrompt(languageId) {
    let frameworkOptions = '';
    this.templateDataProcessor.getFrameworks(languageId).map((data, index) => {
      frameworkOptions +=
`${index + 1}) ${data.frameworkName}
`;
    });
    return `
Choose framework:
${frameworkOptions}(default is 1): `;
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
${languageOptions}(default is 1): `;
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
${exampleOptions}(default is 1): `;
  }
}

module.exports = PromptBuilder;
