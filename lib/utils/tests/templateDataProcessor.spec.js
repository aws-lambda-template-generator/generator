const { expect } = require('chai');
const TemplateDataProcessor = require('../templateDataProcessor');
const testData = require('./test-data/testData');

describe('TemplateDataProcessor', () => {
  describe('getUrl()', () => {
    it('should return correct url', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor(testData);
      const expectedData = 'aws-lambda-template-generator/ts-dynamodb-data-transfer-template';
      // act
      const frameworkArray = templateDataProcessor.getUrl('1', '3', '2');
      // assert
      expect(frameworkArray).to.deep.equal(expectedData);
    });
  });

  describe('getFrameworks()', () => {
    it('should return correct framework array without duplicates', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor(testData);
      const expectedData = [
        { frameworkId: '1', frameworkName: 'serverless' },
        { frameworkId: '2', frameworkName: 'sam-cli' }
      ];
      // act
      const frameworkArray = templateDataProcessor.getFrameworks('1');
      // assert
      expect(frameworkArray).to.deep.equal(expectedData);
    });
  });

  describe('getLanguages()', () => {
    it('should return correct language array', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor(testData);
      const expectedData = [
        { languageId: '1', language: 'typescript' },
        { languageId: '2', language: 'javascript' },
        { languageId: '3', language: 'python' },
        { languageId: '4', language: 'kotlin' }
      ];
      // act
      const languageArray = templateDataProcessor.getLanguages();
      // assert
      expect(languageArray).to.deep.equal(expectedData);
    });
  });

  describe('getExamples()', () => {
    it('should return correct example array for typescript & serverless', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor(testData);
      const expectedExampleArray = [
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
      ];
      // act
      const exampleArray = templateDataProcessor.getExamples('1', '1');
      // assert
      expect(exampleArray).to.deep.equal(expectedExampleArray);
    });

    it('should return correct example array for typescript & sam-cli', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor(testData);
      const expectedExampleArray = [
        {
          templateId: '2',
          templateName: 'simple-api-proxy',
          url: 'aws-lambda-template-generator/ts-simple-api-proxy-template',
          framework: { frameworkId: '2', frameworkName: 'sam-cli' }
        },
        {
          templateId: '3',
          templateName: 'dynamodb-data-transfer',
          url: 'aws-lambda-template-generator/ts-dynamodb-data-transfer-template',
          framework: { frameworkId: '2', frameworkName: 'sam-cli' }
        }
      ];
      // act
      const exampleArray = templateDataProcessor.getExamples('1', '2');
      // assert
      expect(exampleArray).to.deep.equal(expectedExampleArray);
    });

    it('should return correct example array for python & serverless', () => {
      // arrange
      const templateDataProcessor = new TemplateDataProcessor(testData);
      const expectedExampleArray = [
        {
          templateId: '1',
          templateName: 'simple-api-proxy',
          url: 'aws-lambda-template-generator/python-simple-api-proxy-template',
          framework: { frameworkId: '1', frameworkName: 'serverless' }
        }
      ];
      // act
      const exampleArray = templateDataProcessor.getExamples('3', '1');
      // assert
      expect(exampleArray).to.deep.equal(expectedExampleArray);
    });
  });

  describe('getExamplePrompt()', () => {

  });
});
