#!/usr/bin/env node
'use strict';

const templateData = [
  // TypeScript
  {
    languageId: '1',
    language: 'typescript',
    templates: [
      {
        templateId: '1',
        templateName: 'multiple-api-proxy',
        url: 'aws-lambda-template-generator/ts-multiple-api-proxy-template',
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
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '3',
        templateName: 'amazon-connect-metrics-to-kinesis',
        url: 'aws-lambda-template-generator/ts-connect-metrics-to-kinesis-template',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '4',
        templateName: 'step-function-schedule-lambda-every-30s',
        url: 'aws-lambda-template-generator/ts-step-functions-schedule-lambda-every-30sec',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '5',
        templateName: 'graphql-hello-world',
        url: 'aws-lambda-template-generator/ts-graphql-hello-world',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '6',
        templateName: 'graphql-dynamodb',
        url: 'aws-lambda-template-generator/ts-graphql-dynamodb',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '1',
        templateName: 'simple-api-proxy',
        url: 'aws-lambda-template-generator/ts-simple-api-proxy-template-sam-cli',
        framework: {
          frameworkId: '2',
          frameworkName: 'SAM'
        }
      },
      {
        templateId: '2',
        templateName: 'graphql-hello-world',
        url: 'aws-lambda-template-generator/ts-graphql-hello-world-sam-cli',
        framework: {
          frameworkId: '2',
          frameworkName: 'SAM'
        }
      },
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
        url: 'aws-lambda-template-generator/js-simple-api-proxy-template',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '2',
        templateName: 'step-function-schedule-lambda-every-30s',
        url: 'aws-lambda-template-generator/js-step-functions-schedule-lambda-every-30sec',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      },
      {
        templateId: '3',
        templateName: 'graphql-hello-world',
        url: 'aws-lambda-template-generator/js-graphql-hello-world',
        framework: {
          frameworkId: '1',
          frameworkName: 'serverless'
        }
      }
    ]
  },
];

module.exports = {
  templateData
};
