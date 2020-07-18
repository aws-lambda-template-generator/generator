const sinon = require('sinon');
const PromptBuilder = require('../promptBuilder');
const TemplateDataProcessor = require('../templateDataProcessor');
const { expect } = require('chai');

describe('PromptBuilder', () => {
  describe('getFrameworkPrompt()', () => {
    it('should return correct framework prompt', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor({});
      sinon.stub(templateDataProcessor, 'getFrameworks').returns(
        [
          { frameworkId: '1', frameworkName: 'serverless' },
          { frameworkId: '2', frameworkName: 'sam-cli' },
          { frameworkId: '3', frameworkName: 'cloudformation' }
        ]
      );

      expected = `
Choose framework:
1) serverless
2) sam-cli
3) cloudformation
Please help us to have more framework options (e.g. sam-cli).
Come contribute: https://github.com/aws-lambda-template-generator
(default is 1): `;

      const promptBuilder = new PromptBuilder(templateDataProcessor);

      // act
      const frameworkPrompt = promptBuilder.getFrameworkPrompt();
      // assert
      expect(frameworkPrompt).equals(expected);
    });
  });

  describe('getLanugagePrompt()', () => {
    it('should return correct language prompt', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor({});
      sinon.stub(templateDataProcessor, 'getLanguages').returns(
        [
          { languageId: '1', language: 'typescript' },
          { languageId: '2', language: 'javascript' },
          { languageId: '3', language: 'python' },
          { languageId: '4', language: 'kotlin' }
        ]
      );

      expected = `
Choose language:
1) typescript
2) javascript
3) python
4) kotlin
Please help us to have more language options.
Come contribute: https://github.com/aws-lambda-template-generator
(default is 1): `;

      const promptBuilder = new PromptBuilder(templateDataProcessor);

      // act
      const frameworkPrompt = promptBuilder.getLanguagePrompt();
      // assert
      expect(frameworkPrompt).equals(expected);
    });
  });

  describe('getExamplePrompt()', () => {
    it('should return correct example prompt', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor({});
      sinon.stub(templateDataProcessor, 'getExamples').returns(
        [
          {
            templateId: '1',
            templateName: 'simple-api-proxy',
            url: 'aws-lambda-template-generator/ts-simple-api-proxy-template',
            framework: { frameworkId: '1', frameworkName: 'serverless' }
          },
          {
            templateId: '4',
            templateName: 'dynamodb-data-transfer',
            url: 'aws-lambda-template-generator/ts-simple-dynamodb-data-transfer-template',
            framework: { frameworkId: '1', frameworkName: 'serverless' }
          }
        ]
      );

      expected = `
Choose Template:
1) simple-api-proxy
2) dynamodb-data-transfer
Please help us to have more template options.
Come contribute: https://github.com/aws-lambda-template-generator
(default is 1): `;

      const promptBuilder = new PromptBuilder(templateDataProcessor);

      // act
      const frameworkPrompt = promptBuilder.getExamplePrompt('1', '1');
      // assert
      expect(frameworkPrompt).equals(expected);
    });
  });

});
