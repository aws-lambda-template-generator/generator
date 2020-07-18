const testData = [
  // TypeScript
  {
    languageId: '1',
    language: 'typescript',
    templates: [
      {
        templateId: '1',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/ts-simple-api-proxy-template',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '2',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/ts-simple-api-proxy-template',
        framework: {
          frameworkId: '2',
          frameworkName: 'sam-cli'
        }
      },
      {
        templateId: '3',
        templateName: 'dynamodb-data-transfer',
        url: 'aws-lambda-template-generator/ts-dynamodb-data-transfer-template',
        framework: {
          frameworkId: '2',
          frameworkName: 'sam-cli'
        }
      },
      {
        templateId: '4',
        templateName: 'dynamodb-data-transfer',
        url: 'aws-lambda-template-generator/ts-simple-dynamodb-data-transfer-template',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      }
    ]
  },
  // JavaScript
  {
    languageId: '2',
    language: 'javascript',
    templates: [
      {
        templateId: '1',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/ts-simple-api-proxy-template',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '2',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/ts-simple-api-proxy-template',
        framework: {
          frameworkId: '2',
          frameworkName: 'sam-cli'
        }
      }
    ]
  },

  // Python
  {
    languageId: '3',
    language: 'python',
    templates: [
      {
        templateId: '1',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/python-simple-api-proxy-template',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '2',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/python-simple-api-proxy-template',
        framework: {
          frameworkId: '3',
          frameworkName: 'cloudformation'
        }
      }
    ]
  },
  // Kotlin
  {
    languageId: '4',
    language: 'kotlin',
    templates: [
      {
        templateId: '1',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/ts-simple-api-proxy-template',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      }
    ]
  }
];

module.exports = testData;
